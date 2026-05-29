import { clerkMiddleware,createRouteMatcher} from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
const Publicroutes= createRouteMatcher([
  "/signup(.*)",
  "/signin(.*)"
])
export default clerkMiddleware(async(auth,req)=>{

  const {isAuthenticated, redirectToSignIn ,userId}= await auth()
  if(!isAuthenticated && !Publicroutes(req)){
    return redirectToSignIn()
  }

  if(isAuthenticated &&userId && Publicroutes(req) ){

    return NextResponse.redirect(new URL("/useronboarding",req.url))
         

  }

  
  

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)',
  ],
}