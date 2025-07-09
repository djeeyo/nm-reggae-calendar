// app/admin/UploadCSVForm.tsx
"use client";

import { useState } from "react";

export default function UploadCSVForm() {
  const [msg, setMsg] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector(
      "input[type=file]"
    ) as HTMLInputElement;
    if (!input.files?.length) {
      setMsg("Please select a CSV file.");
      return;
    }

    const form = new FormData();
    form.append("file", input.files[0]);

    try {
      const res = await fetch("/api/events/upload", {
        method: "POST",
        body: form,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || JSON.stringify(json.errors));
      }

      setMsg(json.message || `Uploaded ${json.count} events.`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMsg(error.message);
      } else {
        setMsg(String(error));
      }
    }
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col gap-4">
      <input
        type="file"
        name="file"
        accept=".csv"
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-rasta-yellow text-black px-4 py-2 rounded"
      >
        Upload CSV
      </button>
      {msg && <p className="mt-4">{msg}</p>}
    </form>
  );
}
