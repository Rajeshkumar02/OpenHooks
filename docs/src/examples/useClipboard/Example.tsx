"use client";

import React, { useState } from "react";
import { useClipboard } from "@/hooks/useClipboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check } from "lucide-react";

export default function ExampleComponent() {
  const [text, setText] = useState("");
  const { isCopied, copyToClipboard } = useClipboard(2000);

  return (
    <div className="p-4 max-w-lg mx-auto space-y-3">
      <h2 className="text-lg font-semibold text-center">Quick Copy</h2>

      <div className="flex rounded-md border overflow-hidden">
        <Input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border-0 text-sm flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          onClick={() => copyToClipboard(text)}
          disabled={!text}
          className="rounded-none"
        >
          {isCopied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Copy your text with a single click.
      </p>
    </div>
  );
}
