import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { i18n } from './i18n-config'


function getLocale(request: NextRequest) { 
    const headers = new Headers(request.headers)

    const cookie = request.cookies.get('NEXT_LOCALE')

    const headersObject = Object.fromEntries(headers.entries());

    const locales: string[] = i18n.locales

    const languages = new Negotiator({ headers: headersObject }).languages(locales)
    
    return match( cookie ? [cookie?.value] : languages, locales, i18n.defaultLocale)
}


export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
 
  const locale = getLocale(request)

  console.log("getLocale: ", locale)

  return NextResponse.rewrite(
    new URL(`/${locale}${pathname}`, request.nextUrl)
  )
}
 
export const config = {
  matcher: [
    '/((?!_next|api|_next/static|_next/image|img|assets|favicon.ico).*)',
  ],
}