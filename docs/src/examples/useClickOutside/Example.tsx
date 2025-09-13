"use client";

import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/useClickOutside";
import React, { useState, useRef } from "react";

export default function ClickOutsideExample() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => setIsOpen(false));

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className=" bg-fd-card p-6 rounded-lg shadow-lg max-w-md w-full mx-4"
          >
            <h3 className="text-md text-fd-card-foreground mt-0 font-bold mb-4">
              Example Modal
            </h3>
            <p className="mb-4 text-fd-accent-foreground text-sm">
              Click outside this modal to close it, or use the close button
              below.
            </p>
            <div className="flex gap-2">
              <Button onClick={() => setIsOpen(false)} variant={"destructive"}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
