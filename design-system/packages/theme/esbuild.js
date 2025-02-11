import esbuild from "esbuild";
import pkg from "./package.json" with { type: "json" };
// import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;

const external = Object.keys({
  ...pkg.peerDependencies,
  ...pkg.dependencies,
});

const watch = process.argv.includes("--watch");

const baseConfig = {
  entryPoints: ["src/index.js"],
  bundle: true,
  minify, // 개발 편의성을 위해
  sourcemap: true,
  outdir: "dist",
  target: "es2019",
  watch,
  external,
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),

  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
]).catch(() => {
  console.error(...data, "Build failed");
  process.exit(1);
});
