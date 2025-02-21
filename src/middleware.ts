import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("authjs.session-token")?.value;

  const pathname = request.nextUrl.pathname;

  if (token && pathname === "/register") {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!token && pathname === "/") {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  // if (!token && pathname === "/create") {
  //   return NextResponse.redirect(new URL('/register', request.url));
  // }
};

export const config = {
  matcher: ["/register", "/", "/create"],
};