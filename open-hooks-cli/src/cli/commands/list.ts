import { getConfig } from "../utils/config";
import { fetchHookList } from "../utils/git";
import { info, error } from "../utils/logger";
import Table from "cli-table3";

export async function listCommand() {
  try {
    const config = await getConfig();
    const hooks = await fetchHookList(config.repoUrl);

    const table = new Table({
      head: ["Hook Name", "JS Available", "TS Available", "Description"],
      colWidths: [20, 12, 12, 40],
    });

    hooks.forEach((hook) => {
      table.push([
        hook.name,
        hook.js ? "✓" : "✗",
        hook.ts ? "✓" : "✗",
        hook.description || "-",
      ]);
    });

    console.log(table.toString());
    info(`Total hooks: ${hooks.length}`);
  } catch (err: any) {
    error(
      "Failed to list hooks: " +
        (err instanceof Error ? err.message : "Unknown error")
    );
  }
}
