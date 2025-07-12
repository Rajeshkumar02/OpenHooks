import chalk from "chalk";

export const error = (message: string) => {
  console.error(chalk.red(`❌ ${message}`));
};

export const success = (message: string) => {
  console.log(chalk.green(`✅ ${message}`));
};

export const info = (message: string) => {
  console.log(chalk.blue(`ℹ ${message}`));
};

export const warn = (message: string) => {
  console.warn(chalk.yellow(`⚠ ${message}`));
};
