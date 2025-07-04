// app/admin/page.tsx
"use client";

import { useState } from "react";

export default function AdminPage() {
  const [msg, setMsg] = useState<string | null>(null);
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fileInput = e.currentTarget.file as HTMLInputElement;
    if (!fileInput.files?.[0]) return;
    const form = new FormData();
    form.append("file", fileInput.files[0]);
    const res = await fetch("/api/events/upload", { method: "POST", body: form });
    const json = await res.json();
    setMsg(json.message || JSON.stringify(json.errors));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleUpload} className="flex flex-col gap-4">
        <input type="file" name="file" accept=".csv" className="border p-2" />
        <button type="submit" className="bg-rasta-yellow text-black px-4 py-2 rounded">
          Upload CSV
        </button>
      </form>
      {msg && <p className="mt-4">{msg}</p>}
    </div>
  );
}
