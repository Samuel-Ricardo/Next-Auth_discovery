import parseURL from "@/lib/parseURL";

export const SIGNIN = "/login";
export const ERROR = "/login";
export const BASE_PATH = parseURL(process.env.NEXTAUTH_URL).path;


