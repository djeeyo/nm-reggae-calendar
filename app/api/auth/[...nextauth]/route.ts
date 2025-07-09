import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(creds) {
        // 👉 Replace this with your real user lookup!
        // For now we keep a static list in an env var
        const users = JSON.parse(process.env.USERS_JSON || "[]") as {
          email: string;
          password: string;
        }[];

        const user = users.find(
          (u) => u.email === creds?.email && u.password === creds?.password
        );
        if (user) {
          return { id: user.email, name: user.email, email: user.email };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/signin" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
