import inquirer from "inquirer";
import { getConfig } from "../utils/config";
import { fetchHookList, downloadHook } from "../utils/git";
import { error, success, info } from "../utils/logger";
import { validateHookName } from "../utils/validation";
import path from "path";
import { REPO_CONFIG } from "../utils/constants";

export async function addCommand(hookName?: string, options: any = {}) {
  try {
    const config = await getConfig();
    const availableHooks = await fetchHookList(config.repoUrl);

    // Get hook name if not provided
    let finalHookName = hookName;
    if (!finalHookName) {
      const { selectedHook } = await inquirer.prompt([
        {
          type: "list",
          name: "selectedHook",
          message: "Select a hook to install:",
          choices: availableHooks
            .filter((hook) => hook.js || hook.ts)
            .map((hook) => ({
              name: hook.name,
              value: hook.name,
              description: `JS: ${hook.js ? "✓" : "✗"} | TS: ${hook.ts ? "✓" : "✗"}`,
            })),
        },
      ]);
      finalHookName = selectedHook;
    }

    // Validate hook name
    if (!validateHookName(finalHookName!)) {
      error(`Invalid hook name: ${finalHookName}`);
      return;
    }

    // Find hook in manifest
    const hookInfo = availableHooks.find((h) => h.name === finalHookName);
    if (!hookInfo) {
      error(`Hook "${finalHookName}" not found in repository`);
      return;
    }

    // Determine language
    let language = options.language || config.defaultLanguage;

    // Validate language availability
    if (language === "js" && !hookInfo.js) {
      error(`JavaScript version of "${finalHookName}" is not available`);
      if (hookInfo.ts)
        info(`TypeScript version is available. Use --language ts`);
      return;
    }

    if (language === "ts" && !hookInfo.ts) {
      error(`TypeScript version of "${finalHookName}" is not available`);
      if (hookInfo.js)
        info(`JavaScript version is available. Use --language js`);
      return;
    }

    // Determine directory
    let installDir = options.dir || config.hooksDir;
    if (!options.dir) {
      const { dir } = await inquirer.prompt([
        {
          type: "input",
          name: "dir",
          message: "Installation directory?",
          default: config.hooksDir,
        },
      ]);
      installDir = dir;
    }

    // Create full file path
    const fileName = `${REPO_CONFIG.HOOK_FILE_PREFIX}${finalHookName}.${language}`;
    const filePath = path.join(installDir, fileName);

    // Download hook
    await downloadHook(config.repoUrl, finalHookName!, language, filePath);

    success(`Hook added: ${filePath}`);
    info(
      `Import with: import ${REPO_CONFIG.HOOK_FILE_PREFIX}${finalHookName} from './${path
        .relative(process.cwd(), filePath)
        .replace(/\\/g, "/")}'`
    );
  } catch (err: any) {
    error(err instanceof Error ? err.message : "An unknown error occurred");
  }
}
