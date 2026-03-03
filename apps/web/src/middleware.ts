import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  const url = new URL(request.url)
  const country = request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country') || 'US'
  
  // If accessing from India, redirect to India-specific page
  if (country === 'IN' && !url.pathname.startsWith('/in')) {
    return NextResponse.redirect(new URL('/in', url.origin))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
