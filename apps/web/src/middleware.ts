import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * VerveMind Edge Middleware
 * 
 * CORE RESPONSIBILITIES:
 * 1. Subdomain Routing: Map hvac.vervemindai.com to /hvac/index.html
 * 2. Regional Redirect: Map vervemindai.com (from India) to /india
 * 3. Loop Prevention: Ensure rewrites don't trigger recursive calls.
 */

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  const country = request.headers.get('x-vercel-ip-country') || ''

  // 1. Skip middleware for static assets and internal Next.js paths
  if (
    url.pathname.startsWith('/_next') || 
    url.pathname.startsWith('/api') ||
    url.pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 2. Identify Domain Context
  const isMainDomain = hostname.match(/^(www\.)?vervemindai\.com$/i)
  
  const niches = ['hvac', 'dental', 'roofing', 'medspa', 'reactivation']
  const apps = ['portal', 'kits', 'dashboard', 'blog']
  const allSubdomains = [...niches, ...apps]
  
  const subdomain = allSubdomains.find(s => 
    hostname.toLowerCase().startsWith(`${s}.`)
  )

  // 3. LOGIC FOR SUBDOMAINS (Niche Pages)
  if (subdomain) {
    // If we're on a subdomain, we NEVER want to be in /india or /in
    if (url.pathname.startsWith('/india') || url.pathname.startsWith('/in')) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Rewrite to the specific folder/file in public/
    // Append /index.html if path is root to ensure static resolution
    const internalPath = url.pathname === '/' ? '/index.html' : url.pathname
    
    // Prevent recursive rewrites
    if (url.pathname.startsWith(`/${subdomain}`)) {
      return NextResponse.next()
    }

    const rewriteUrl = url.clone()
    rewriteUrl.pathname = `/${subdomain}${internalPath}`
    
    const res = NextResponse.rewrite(rewriteUrl)
    res.headers.set('x-vervemind-ctx', `subdomain:${subdomain}`)
    return res
  }

  // 4. LOGIC FOR MAIN DOMAIN (India Redirect)
  if (isMainDomain && url.pathname === '/') {
    // If visitor is from India and on the main homepage root
    if (country === 'IN') {
      return NextResponse.redirect(new URL('/india', request.url))
    }
  }

  // Handle /in legacy path
  if (url.pathname === '/in') {
    return NextResponse.redirect(new URL('/india', request.url))
  }

  // 5. Fallthrough
  const res = NextResponse.next()
  res.headers.set('x-vervemind-ctx', 'main-domain')
  return res
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
