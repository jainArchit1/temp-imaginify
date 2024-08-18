import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Custom middleware
export async function middleware(req: NextRequest) {
  // Continue to the next middleware or request handler
  return NextResponse.next();
}

// Clerk's middleware function
export const config = {
  matcher: ["/((?!.*\\..*|_next|api/webhooks/.*).*)", "/", "/(api|trpc)(.*)"],
};
