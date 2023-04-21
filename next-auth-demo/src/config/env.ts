console.log({ENV_CHECK: process.env})

export const ENV_CHECK = process.env

export const API_URL = process.env.API_URL
export const AUTH_URL = `${process.env.API_URL}/api/auth`

export const GITHUB = {
  ID:process.env.GITHUB_ID,
  SECRET:process.env.GITHUB_SECRET,
}

export const NEXT_AUTH= {SECRET:process.env.NEXT_AUTH_SECRET}

