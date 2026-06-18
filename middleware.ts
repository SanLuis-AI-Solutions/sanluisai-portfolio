import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const isSanLuisDomain = host === 'sanluisai.com' || host === 'www.sanluisai.com'

  if (isSanLuisDomain) {
    const url = request.nextUrl.clone()
    url.pathname = '/coming-soon'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static assets, API routes, and the coming-soon page itself
    '/((?!_next/static|_next/image|favicon.ico|assets/|api/|coming-soon).*)',
  ],
}
