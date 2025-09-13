"use client";

import React, { useState } from "react";
import { useTimeout } from "@/hooks/useTimeout";
import { Button } from "@/components/ui/button";

type MessageType = "info" | "success" | "warning";

export default function ExampleComponent() {
  const [message, setMessage] = useState<{
    text: string;
    type: MessageType;
  } | null>(null);

  // Automatically clear after 3s
  useTimeout(() => setMessage(null), message ? 3000 : null);

  const showMessage = (text: string, type: MessageType = "info") => {
    setMessage({ text, type });
  };

  const textColors: Record<MessageType, string> = {
    info: "text-blue-600",
    success: "text-green-600",
    warning: "text-yellow-600",
  };

  return (
    <div className="p-2 sm:p-4 space-y-4 w-full max-w-md mx-auto text-center">
      <h2 className="text-lg sm:text-xl font-bold">useTimeout Demo</h2>

      <Button
        onClick={() => showMessage("This will disappear in 3 seconds!", "info")}
        className="text-sm sm:text-base"
      >
        Show Message
      </Button>

      {/* Inline message (only one at a time) */}
      {message && (
        <p
          className={`text-sm sm:text-base font-medium transition-opacity duration-500 ${
            textColors[message.type]
          }`}
        >
          {message.text}
        </p>
      )}

      <p className="text-xs sm:text-sm text-muted-foreground px-2">
        The message appears below and disappears after 3 seconds using
        <code className="mx-1">useTimeout</code>.
      </p>
    </div>
  );
}
