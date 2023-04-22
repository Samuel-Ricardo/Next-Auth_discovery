import { LoginPainel } from "@/components";
import { getSession } from "next-auth/react"

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  return {props: {session}}
}

export default function login () {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
     <LoginPainel/>   
    </div>
  )
}
