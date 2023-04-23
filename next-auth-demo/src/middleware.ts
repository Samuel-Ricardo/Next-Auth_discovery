import { BASE_PATH, ERROR, SIGNIN } from "@/config/pages/routes";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export default async function handle(req: NextRequest, res:NextResponse){

  console.log({URL:req.nextUrl})

  if (
    req.nextUrl.pathname.startsWith(BASE_PATH) ||
    [SIGNIN, ERROR].includes(req.nextUrl.pathname)
  ) { return }

  const sesssion = await getSession(
      {
        req: {headers: {cookie: req.headers.get("cookie")}}
      }
    )

  console.log({sesssion})

  if (sesssion) return NextResponse.next();

  return NextResponse
          .redirect(new URL(SIGNIN, req.nextUrl.origin))
}
