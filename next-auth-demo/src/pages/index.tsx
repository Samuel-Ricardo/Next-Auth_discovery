import { signOut, useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data:session} = useSession();

  return (
    <main className={`${inter.className} px-0 py-2`}>
      <h1>{`Seja bem vindo :D ${session?.user?.name}`}</h1>
      <button onClick={() => signOut()}>Sair >:()</button>
    </main>
  )
}
