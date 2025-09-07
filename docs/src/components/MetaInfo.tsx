import React from "react";

interface StatusBadgeProps {
  status: "stable" | "beta" | "experimental" | "deprecated";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    stable: "bg-green-100 text-green-800 border-green-200",
    beta: "bg-blue-100 text-blue-800 border-blue-200",
    experimental: "bg-yellow-100 text-yellow-800 border-yellow-200",
    deprecated: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${colors[status]}`}
    >
      {status}
    </span>
  );
}

interface MetaInfoProps {
  version?: string;
  status?: "stable" | "beta" | "experimental" | "deprecated";
  bundleSize?: string;
  requires?: string;
}

export function MetaInfo({
  version,
  status,
  bundleSize,
  requires,
}: MetaInfoProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6 text-sm text-muted-foreground">
      {status && (
        <div className="flex items-center gap-1">
          <strong>Status:</strong> <StatusBadge status={status} />
        </div>
      )}
      {version && (
        <div className="flex items-center gap-1">
          <strong>Version:</strong> {version}
        </div>
      )}
      {bundleSize && (
        <div className="flex items-center gap-1">
          <strong>Bundle Size:</strong> {bundleSize}
        </div>
      )}
      {requires && (
        <div className="flex items-center gap-1">
          <strong>Requires:</strong> {requires}
        </div>
      )}
    </div>
  );
}
