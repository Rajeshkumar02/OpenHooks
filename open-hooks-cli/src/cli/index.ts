#!/usr/bin/env node
import { Command } from "commander";
import { initCommand } from "./commands/init";
import { addCommand } from "./commands/add";
import { listCommand } from "./commands/list";

const program = new Command();

program
  .name("hooks-cli")
  .description("CLI for managing custom React hooks")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize hooks configuration")
  .action(initCommand);

program
  .command("add [hook]")
  .description("Add a custom hook")
  .option("-l, --language <language>", "Specify hook language (js|ts)")
  .option("-d, --dir <directory>", "Specify installation directory")
  .action(addCommand);

program.command("list").description("List available hooks").action(listCommand);

program.parse(process.argv);
