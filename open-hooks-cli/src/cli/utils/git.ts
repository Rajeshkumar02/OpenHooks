import axios from "axios";
import fs from "fs-extra";
import path from "path";
import { error, info } from "./logger";
import { HookInfo } from "../../types";
import { REPO_CONFIG } from "./constants";

const GITHUB_RAW_URL = (repo: string, branch: string, filePath: string) =>
  `${REPO_CONFIG.RAW_CONTENT_URL}/${repo}/${branch}/${filePath}`;

function parseRepoUrl(repoUrl: string): {
  owner: string;
  repo: string;
  branch: string;
} {
  const match = repoUrl.match(
    /github\.com[/:]([^/]+)\/([^/#]+)(?:\.git)?(?:\/tree\/([^#]+))?/i
  );

  if (!match) {
    throw new Error(REPO_CONFIG.ERRORS.INVALID_REPO_URL);
  }

  let repo = match[2];
  if (repo.endsWith(".git")) {
    repo = repo.slice(0, -4); // ✅ Remove .git suffix if present
  }

  return {
    owner: match[1],
    repo,
    branch: match[3] || REPO_CONFIG.DEFAULT_BRANCH,
  };
}

export async function fetchHookList(repoUrl: string): Promise<HookInfo[]> {
  try {
    const { owner, repo, branch } = parseRepoUrl(repoUrl);
    const manifestUrl = GITHUB_RAW_URL(
      `${owner}/${repo}`,
      branch,
      REPO_CONFIG.MANIFEST_PATH
    );

    info(`Fetching hook list...`);
    const response = await axios.get(manifestUrl);

    if (response.data?.hooks && Array.isArray(response.data.hooks)) {
      return response.data.hooks;
    }

    throw new Error(REPO_CONFIG.ERRORS.MANIFEST_NOT_FOUND);
  } catch (err: any) {
    const message = err instanceof Error ? err.message : "Unknown error";
    error("Failed to fetch hook list: " + message);
    throw err;
  }
}

export async function downloadHook(
  repoUrl: string,
  hookName: string,
  language: "ts" | "js",
  filePath: string
): Promise<void> {
  try {
    const { owner, repo, branch } = parseRepoUrl(repoUrl);
    const hookDir =
      language === "js" ? REPO_CONFIG.JS_HOOKS_DIR : REPO_CONFIG.TS_HOOKS_DIR;

    const hookPath = path.join(
      REPO_CONFIG.HOOKS_BASE_PATH,
      hookDir,
      `${REPO_CONFIG.HOOK_FILE_PREFIX}${hookName}.${language}`
    );

    const downloadUrl = GITHUB_RAW_URL(`${owner}/${repo}`, branch, hookPath);

    info(`Downloading hook...`);
    const response = await axios.get(downloadUrl, { responseType: "text" });

    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, response.data);
  } catch (err: any) {
    const message = err instanceof Error ? err.message : "Unknown error";
    error(`Failed to download hook: ${hookName} - ${message}`);
    throw new Error(REPO_CONFIG.ERRORS.HOOK_NOT_FOUND);
  }
}
