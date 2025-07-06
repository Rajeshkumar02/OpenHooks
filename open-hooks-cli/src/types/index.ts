export interface HookInfo {
  name: string;
  description?: string;
  js: boolean;
  ts: boolean;
  dependencies?: string[];
  examples?: string[];
}

export interface Config {
  hooksDir: string;
  defaultLanguage: "ts" | "js";
  repoUrl: string;
}
