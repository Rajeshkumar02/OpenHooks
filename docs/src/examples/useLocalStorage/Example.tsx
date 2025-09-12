"use client";

import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RotateCcw } from "lucide-react";

export default function ExampleComponent() {
  // Simple string value
  const [name, setName] = useLocalStorage("user-name", "");

  // Boolean value
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  // Number value
  const [count, setCount] = useLocalStorage("counter", 0);

  // Object value
  const [settings, setSettings] = useLocalStorage("user-settings", {
    notifications: true,
    language: "en",
  });

  const resetAll = () => {
    setName("");
    setDarkMode(false);
    setCount(0);
    setSettings({ notifications: true, language: "en" });
  };

  return (
    <div className="p-3 sm:p-4 space-y-4 w-full max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-lg sm:text-xl font-bold">useLocalStorage Demo</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          All changes are automatically saved to localStorage
        </p>
        <Button onClick={resetAll} variant="outline" size="sm">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset All
        </Button>
      </div>

      <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
        {/* String Input */}
        <Card>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg">Text Input</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">
                Your Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full text-sm sm:text-base"
              />
            </div>
            {name && (
              <div className="p-2 sm:p-3 bg-muted rounded text-xs sm:text-sm">
                <strong>Stored:</strong> "{name}"
              </div>
            )}
          </CardContent>
        </Card>

        {/* Boolean Switch */}
        <Card>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg">
              Boolean Value
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="darkMode" className="text-sm">
                Dark Mode
              </Label>
              <Switch
                id="darkMode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
            <div className="p-2 sm:p-3 bg-muted rounded text-xs sm:text-sm">
              <strong>Stored:</strong> {darkMode ? "true" : "false"}
            </div>
          </CardContent>
        </Card>

        {/* Number Counter */}
        <Card>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg">Number Value</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                onClick={() => setCount(count - 1)}
                variant="outline"
                size="sm"
                className="h-8 w-8 sm:h-9 sm:w-9 p-0"
              >
                -
              </Button>
              <span className="flex-1 text-center text-lg sm:text-xl font-semibold min-w-0">
                {count}
              </span>
              <Button
                onClick={() => setCount(count + 1)}
                variant="outline"
                size="sm"
                className="h-8 w-8 sm:h-9 sm:w-9 p-0"
              >
                +
              </Button>
            </div>
            <div className="p-2 sm:p-3 bg-muted rounded text-xs sm:text-sm">
              <strong>Stored:</strong> {count}
            </div>
          </CardContent>
        </Card>

        {/* Object Settings */}
        <Card>
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-base sm:text-lg">Object Value</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Notifications</Label>
                <Switch
                  checked={settings.notifications}
                  onCheckedChange={(checked) =>
                    setSettings((prev) => ({ ...prev, notifications: checked }))
                  }
                />
              </div>
              <div className="space-y-1">
                <Label className="text-sm">Language</Label>
                <select
                  value={settings.language}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      language: e.target.value,
                    }))
                  }
                  className="w-full p-2 border rounded text-sm bg-background"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
            <div className="p-2 sm:p-3 bg-muted rounded text-xs font-mono overflow-auto">
              <strong>Stored:</strong>
              <br />
              <pre className="mt-1 whitespace-pre-wrap">
                {JSON.stringify(settings, null, 2)}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* localStorage Preview */}
      <Card>
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-sm sm:text-base">
            localStorage Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs sm:text-sm font-mono bg-muted p-3 rounded space-y-1 overflow-auto">
            <div className="break-all">
              <strong>user-name:</strong> "{name}"
            </div>
            <div className="break-all">
              <strong>dark-mode:</strong> {darkMode.toString()}
            </div>
            <div className="break-all">
              <strong>counter:</strong> {count}
            </div>
            <div className="break-all">
              <strong>user-settings:</strong> {JSON.stringify(settings)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
