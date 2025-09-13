"use client";

import React, { useState } from "react";
import { usePrevious } from "@/hooks/usePrevious";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

export default function ExampleComponent() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div className="p-3 sm:p-4 space-y-6 w-full max-w-lg mx-auto">
      {/* Counter Controls */}
      <div className="flex items-center justify-center gap-6">
        <Button
          onClick={() => setCount((c) => c - 1)}
          variant="outline"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-bold">{count}</span>
          <span className="text-xs sm:text-sm text-muted-foreground">
            Current
          </span>
        </div>

        <Button
          onClick={() => setCount((c) => c + 1)}
          variant="outline"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Previous Value */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs sm:text-sm text-muted-foreground">
          Previous
        </span>
        <span className="px-3 py-1 rounded-full bg-muted font-mono text-sm">
          {previousCount ?? "undefined"}
        </span>
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-muted-foreground text-center">
        This hook remembers the <strong>last value</strong> across renders.
      </p>
    </div>
  );
}
