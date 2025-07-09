// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";    // or `"../../../lib/auth"` if you don’t have baseUrl

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

