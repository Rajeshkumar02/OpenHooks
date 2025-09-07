import React from "react";

interface BrowserCompatibilityProps {
  browsers: {
    name: string;
    supported: boolean;
    notes?: string;
  }[];
}

export function BrowserCompatibility({ browsers }: BrowserCompatibilityProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Browser</th>
            <th className="px-4 py-2 text-left">Supported</th>
            <th className="px-4 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          {browsers.map((browser, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-medium">{browser.name}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-flex items-center gap-1 ${
                    browser.supported ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {browser.supported ? "✅" : "❌"}
                  {browser.supported ? "Yes" : "No"}
                </span>
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {browser.notes || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface PerformanceMetricsProps {
  metrics: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Metric</th>
            <th className="px-4 py-2 text-left">Value</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-medium">{metric.metric}</td>
              <td className="px-4 py-2 font-mono text-sm">{metric.value}</td>
              <td className="px-4 py-2 text-muted-foreground">
                {metric.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
