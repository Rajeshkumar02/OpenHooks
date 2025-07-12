// Central repository configuration
export const REPO_CONFIG = {
  // Default repository information
  DEFAULT_REPO: "Rajeshkumar02/OpenHooks",
  DEFAULT_BRANCH: "main",

  // Repository structure paths
  HOOKS_BASE_PATH: "hooks",
  MANIFEST_PATH: "hooks/manifest.json",
  JS_HOOKS_DIR: "js",
  TS_HOOKS_DIR: "ts",

  // GitHub URL patterns
  RAW_CONTENT_URL: "https://raw.githubusercontent.com",
  REPO_URL_PATTERN: "https://github.com/{owner}/{repo}/tree/{branch}",

  // Hook file naming convention
  HOOK_FILE_PREFIX: "use",
  HOOK_FILE_SUFFIX: "{ext}",

  // Error messages
  ERRORS: {
    INVALID_REPO_URL: "Invalid GitHub repository URL",
    MANIFEST_NOT_FOUND: "Hook manifest not found",
    HOOK_NOT_FOUND: "Hook not found in repository",
  },
};

// Default configuration values
export const DEFAULT_CONFIG_VALUES = {
  HOOKS_DIR: "src/hooks",
  DEFAULT_LANGUAGE: "ts" as "ts" | "js",
  REPO_URL: `https://github.com/${REPO_CONFIG.DEFAULT_REPO}`,
};

// CLI constants
export const CLI = {
  COMMAND_NAME: "open-hooks",
  CONFIG_FILE: "open-hooks.config.json",
  COMMANDS: {
    INIT: "init",
    ADD: "add",
    LIST: "list",
  },
  PROMPTS: {
    HOOKS_DIR: "Where should hooks be stored?",
    DEFAULT_LANG: "Default hook language?",
    REPO_URL: "Git repository URL for hooks?",
  },
};
