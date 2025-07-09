// app/admin/page.tsx

import { getServerSession } from "next-auth/next";                // ← note “/next”
import { authOptions } from "../api/auth/[...nextauth]/route";  // your NextAuth options
import { redirect } from "next/navigation";
import UploadCSVForm from "./UploadCSVForm";

export default async function AdminPage() {
  // fetch the session on the server
  const session = await getServerSession(authOptions);

  // if nobody’s signed in, bounce to /auth/signin
  if (!session) {
    redirect("/auth/signin");
  }

  // otherwise render your client-side form
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <UploadCSVForm />
    </div>
  );
}
