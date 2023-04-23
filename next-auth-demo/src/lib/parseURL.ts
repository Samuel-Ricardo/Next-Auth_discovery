import { AUTH_URL } from "@config/env";
import { IInternalURL } from "@Types";

/** Returns an `URL` like object to make requests/redirects from server-side */
export default function parseURL(url?:string):IInternalURL {

  const defaultUrl = new URL(AUTH_URL)

  if(url && !url.startsWith("http")) {
    url = `https://${url}`;
  }

  const _url = new URL(url ?? defaultUrl);
  const path = (_url.pathname === "/" ? defaultUrl.pathname : _url.pathname)
                // Remove trailing slash
                .replace(/\/$/, "")
  
  const base = `${_url.origin}${path}`;

  return {
    origin: _url.origin,
    host: _url.host,
    path,
    base,
    toString: () => base,
  }
} 
