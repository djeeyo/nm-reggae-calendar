"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const evt = e as BeforeInstallPromptEvent;
      e.preventDefault();           // stop the automatic prompt
      setDeferredPrompt(evt);       // stash the event for our button
      setVisible(true);             // show the button
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();            // show the native prompt
    const choice = await deferredPrompt.userChoice;
    console.log("PWA install choice:", choice.outcome);
    setVisible(false);
    setDeferredPrompt(null);
  };

  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="ml-4 bg-white text-brand-blue px-4 py-2 rounded shadow hover:bg-gray-100 transition"
    >
      Install App
    </button>
  );
}
