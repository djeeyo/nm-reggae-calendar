import { getServerSession } from "next-auth/next";
import { authOptions }      from "@/lib/auth";    // same path you used above
import { redirect }         from "next/navigation";
import UploadCSVForm        from "./UploadCSVForm";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <UploadCSVForm />
    </div>
  );
}
