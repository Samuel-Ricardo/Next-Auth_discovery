console.log({ENV_CHECK: process.env})

export const ENV_CHECK = process.env

export const API_URL = process.env.API_URL as string
export const AUTH_URL = `${process.env.API_URL}/api/auth`  as string

export const GITHUB = {
  ID:process.env.GITHUB_ID as string,
  SECRET:process.env.GITHUB_SECRET as string
}

export const NEXT_AUTH= {SECRET:process.env.NEXT_AUTH_SECRET as string}

