import fs from "fs-extra";
import path from "path";
import { error, warn } from "./logger";
import { CLI } from "./constants";
import { Config } from "../../types";

export async function getConfig(): Promise<Config> {
  try {
    const configPath = path.resolve(CLI.CONFIG_FILE);

    if (!(await fs.pathExists(configPath))) {
      warn(
        `Configuration not found. Run "${CLI.COMMAND_NAME} ${CLI.COMMANDS.INIT}" first.`
      );
      throw new Error("Configuration missing");
    }

    return await fs.readJson(configPath);
  } catch (err) {
    error("Failed to read configuration");
    throw err;
  }
}

// ... rest of the file

export async function saveConfig(config: Partial<Config>): Promise<void> {
  try {
    await fs.writeJson(CLI.CONFIG_FILE, config, { spaces: 2 });
  } catch (err) {
    error("Failed to save configuration");
    throw err;
  }
}
