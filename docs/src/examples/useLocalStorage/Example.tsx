"use client";

import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ExampleComponent() {
  const [name, setName] = useLocalStorage("user-name", "");

  return (
    <div className="p-2 sm:p-4 space-y-4 w-full max-w-md mx-auto">
      <h2 className="text-lg sm:text-xl font-bold text-center">
        useLocalStorage Demo
      </h2>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm sm:text-base">
          Your Name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="text-sm sm:text-base"
        />
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground text-center px-2">
        Your name is saved in localStorage and will persist across page reloads.
      </p>
    </div>
  );
}
