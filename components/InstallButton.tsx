import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // shadcn button

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event for later
      setDeferredPrompt(e);
      // Show our custom install button
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = async () => {
    if (!deferredPrompt) return;
    // Show the browser’s install prompt
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    // Hide the button, user made a choice
    setVisible(false);
    setDeferredPrompt(null);
    console.log("PWA install choice:", choice.outcome);
  };

  if (!visible) return null;
  return (
    <Button onClick={onClick} className="ml-4">
      Install App
    </Button>
  );
}
