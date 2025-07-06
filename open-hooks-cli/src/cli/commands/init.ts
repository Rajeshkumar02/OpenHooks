import inquirer from "inquirer";
import { saveConfig } from "../utils/config";
import { success } from "../utils/logger";
import { DEFAULT_CONFIG_VALUES, CLI } from "../utils/constants";

export async function initCommand() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "hooksDir",
      message: CLI.PROMPTS.HOOKS_DIR,
      default: DEFAULT_CONFIG_VALUES.HOOKS_DIR,
    },
    {
      type: "list",
      name: "defaultLanguage",
      message: CLI.PROMPTS.DEFAULT_LANG,
      choices: ["ts", "js"],
      default: DEFAULT_CONFIG_VALUES.DEFAULT_LANGUAGE,
    },
    {
      type: "input",
      name: "repoUrl",
      message: CLI.PROMPTS.REPO_URL,
      default: DEFAULT_CONFIG_VALUES.REPO_URL,
    },
  ]);

  await saveConfig({
    hooksDir: answers.hooksDir,
    defaultLanguage: answers.defaultLanguage,
    repoUrl: answers.repoUrl,
  });

  success("Configuration saved!");
}
