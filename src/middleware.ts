import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up", "/api/webhooks/clerk", "/api/events/get"]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};