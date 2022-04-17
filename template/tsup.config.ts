import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: options.watch,
  minify: !options.watch,
  clean: true,
  {{#if_eq mode "browser"}}
  format: ["esm", "iife"],
  {{/if_eq}}
  {{#if_eq mode "node"}}
  format: ["cjs"],
  {{/if_eq}}
  {{#if_eq mode "both"}}
  format: ["esm", "iife", "cjs"],
  {{/if_eq}}
  {{#if_xor mode "browser" "both"}}
  target: "es6",
  {{/if_xor}}
  loader: {
    ".jpg": "base64",
    ".webp": "file",
  },
  external: []
}));
