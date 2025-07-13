- // components/InstallButton.tsx
- // Add your InstallButton into the global header/navigation
-
- import { useEffect, useState } from "react";
- import { Button } from "@/components/ui/button";
- // …rest of your code…
-
- import { useEffect, useState } from "react";
- import { Button } from "@/components/ui/button"; // shadcn button

+ "use client";
+ import { useEffect, useState } from "react";
+ import { Button } from "@/components/ui/button";
+
+ export function InstallButton() {
+   const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
+   const [visible, setVisible] = useState(false);
+
+   useEffect(() => {
+     const handler = (e: any) => {
+       e.preventDefault();
+       setDeferredPrompt(e);
+       setVisible(true);
+     };
+     window.addEventListener("beforeinstallprompt", handler);
+     return () => window.removeEventListener("beforeinstallprompt", handler);
+   }, []);
+
+   const onClick = async () => {
+     if (!deferredPrompt) return;
+     deferredPrompt.prompt();
+     const choice = await deferredPrompt.userChoice;
+     setVisible(false);
+     setDeferredPrompt(null);
+     console.log("PWA install choice:", choice.outcome);
+   };
+
+   if (!visible) return null;
+   return <Button onClick={onClick} className="ml-4">Install App</Button>;
+ }

