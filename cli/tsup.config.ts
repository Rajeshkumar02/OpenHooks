import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.ts"],
  format: ["esm"], // ✅ force ESM output
  outDir: "dist",
  target: "node20",
  clean: true,
  splitting: false,
  shims: false, // ❌ turn off CJS shims to avoid require()
});
