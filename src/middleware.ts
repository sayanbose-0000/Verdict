import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("authjs.callback-url")?.value || request.cookies.get("authjs.csrf-token")?.value;

  const pathname = request.nextUrl.pathname;
  console.log(token);
  console.log(pathname);

  if (token && pathname === "/register") {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!token && pathname === "/") {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/register", "/"],
};