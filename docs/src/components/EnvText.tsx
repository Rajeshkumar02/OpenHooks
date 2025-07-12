import React from "react";

export interface EnvURLProps {
  /**
   * The environment variable name to read the base value from.
   * Example: "NEXT_PUBLIC_PROJECT_URL" => "github.com/Rajeshkumar02/OpenHooks"
   */
  env: string;

  /**
   * Optional path to append after the env value.
   * Example: "pulls" → "github.com/Rajeshkumar02/OpenHooks/pulls"
   */
  path?: string;

  /**
   * Optional query parameters to include in the URL.
   * Example: { q: "is:pr", sort: "updated" } → ?q=is%3Apr&sort=updated
   */
  query?: Record<string, string>;

  /**
   * Optional base protocol and domain to prepend before env value.
   * Example: "https://github.com" + "/Rajeshkumar02/OpenHooks"
   * Used only if baseURL is not provided.
   */
  base?: string;

  /**
   * Optional complete base URL to override env value.
   * Example: "https://github.com/Rajeshkumar02/OpenHooks"
   */
  baseURL?: string;

  /**
   * Whether to prepend "https://" if no base is given.
   * Default: true
   */
  https?: boolean;

  /**
   * Render as an anchor <a> tag or as plain text.
   * Default: false
   */
  link?: boolean;

  /**
   * Optional custom link text or element.
   */
  children?: React.ReactNode;
}

export const EnvURL: React.FC<EnvURLProps> = ({
  env,
  path = "",
  query,
  base,
  baseURL,
  https = true,
  link = false,
  children,
}) => {
  const envValue = process.env[env];

  if (!envValue) {
    return <span style={{ color: "red" }}>Missing env: {env}</span>;
  }

  // Determine base URL
  let baseUrl = baseURL
    ? baseURL
    : base
    ? `${base.replace(/\/$/, "")}/${envValue.replace(/^\/+/, "")}`
    : envValue;

  // Ensure https:// prefix if needed
  if (https && !/^https?:\/\//i.test(baseUrl)) {
    baseUrl = `https://${baseUrl}`;
  }

  // Append path if present
  const cleanPath = path ? `/${path.replace(/^\/+/, "")}` : "";

  // Build query string
  const queryString = query
    ? "?" +
      Object.entries(query)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join("&")
    : "";

  const finalUrl = `${baseUrl}${cleanPath}${queryString}`;

  return link ? (
    <a href={finalUrl} target="_blank" rel="noopener noreferrer">
      {children ?? finalUrl}
    </a>
  ) : (
    <>{finalUrl}</>
  );
};
