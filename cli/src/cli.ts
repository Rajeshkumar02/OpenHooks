#!/usr/bin/env node
import { Command } from "commander";
import { addCommand } from "./cli/commands/add";
import { listCommand } from "./cli/commands/list";
import { initCommand } from "./cli/commands/init";
import { readFileSync } from "fs";

const program = new Command();
// Read version from package.json
const pkg = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf-8"),
);

program
  .name(pkg?.name || "open-hooks")
  .description("CLI for managing custom React hooks")
  .version(`${pkg?.version}`, "-v, --version", "Output the current version");

program
  .command("init")
  .description("Initialize hooks configuration")
  .action(initCommand);

program
  .command("add [hooks...]")
  .description("Add one or more custom hooks")
  .option("-l, --language <language>", "Specify hook language (js|ts)")
  .option("-d, --dir <directory>", "Specify installation directory")
  .action((hooks, options) => {
    const hookNames = Array.isArray(hooks) ? hooks : hooks ? [hooks] : [];
    addCommand(hookNames, options);
  });

program.command("list").description("List available hooks").action(listCommand);

program.parse(process.argv);
