import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  clean: true,
});

export default tsupConfig;
