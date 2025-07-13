"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event for later
      setDeferredPrompt(evt);
      // Show our custom install button
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = async () => {
    if (!deferredPrompt) return;
    // Show the browser’s install prompt
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    console.log("PWA install choice:", choice.outcome);
    // Hide the button once the user has made a choice
    setVisible(false);
    setDeferredPrompt(null);
  };

  if (!visible) return null;

  return (
    <Button onClick={onClick} className="ml-4">
      Install App
    </Button>
  );
}
