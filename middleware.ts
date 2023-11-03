import { NextRequest, NextResponse } from "next/server";


export const middleware = async (request: NextRequest) => {
    const response = NextResponse.next();
    response.headers.set("x-middleware-test", "Hello from middleware!");
    return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
