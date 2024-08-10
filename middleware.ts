/* eslint-disable prettier/prettier */
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // eslint-disable-next-line no-console
    console.log(request.nextUrl.pathname);
  },
  {
    callbacks: {},
  },
);
export const config = { matcher: [] };
