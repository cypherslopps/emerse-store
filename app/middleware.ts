import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;

  // Redirect unauthenticated users to the login page
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/sign-in', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname); // Add return URL
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // Allow access for authenticated users
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect dashboard routes
};
