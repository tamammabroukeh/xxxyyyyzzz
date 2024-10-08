/* eslint-disable prettier/prettier */
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // eslint-disable-next-line no-console
    console.log(request.nextUrl.pathname);
    const isAdminPage = request.nextUrl?.pathname.startsWith("/admin")
    const isOwnerPage = request.nextUrl?.pathname.startsWith("/owner")

    if (isAdminPage && request.nextauth.token?.role !== "admin") {
      return NextResponse.rewrite(new URL("/", request.url));
    }
    if (isOwnerPage && request.nextauth.token?.role !== "owner") {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);
export const config = { matcher: ["/admin", "/owner"] };
