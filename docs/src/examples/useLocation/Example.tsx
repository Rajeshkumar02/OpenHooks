"use client";

import React from "react";
import { useLocation } from "@/hooks/useLocation";

export default function ExampleComponent() {
  const { location } = useLocation();

  return (
    <table className="w-full text-xs sm:text-sm border-separate border-spacing-y-2">
      <tbody>
        <tr>
          <td className="font-medium pr-2 w-20">Pathname</td>
          <td className="bg-muted px-2 py-1 rounded font-mono break-all">
            {location?.pathname}
          </td>
        </tr>
        <tr>
          <td className="font-medium pr-2">Search</td>
          <td className="bg-muted px-2 py-1 rounded font-mono break-all">
            {location?.search || "(empty)"}
          </td>
        </tr>
        <tr>
          <td className="font-medium pr-2">Hash</td>
          <td className="bg-muted px-2 py-1 rounded font-mono break-all">
            {location?.hash || "(empty)"}
          </td>
        </tr>
        <tr>
          <td className="font-medium pr-2">Full URL</td>
          <td className="bg-muted px-2 py-1 rounded font-mono break-all">
            {location?.href}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
