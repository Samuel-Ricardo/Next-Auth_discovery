import { GITHUB, NEXT_AUTH } from '@/config/env'
import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, {AuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const auth_options:AuthOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB.ID,
      clientSecret: GITHUB.SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      }
    })
  ],
  secret : NEXT_AUTH.SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({session, user}) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        name: user.name
      }
    })
  }
}

export default NextAuth(auth_options)
