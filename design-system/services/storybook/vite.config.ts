/// <reference types="vitest" />

import { defineConfig, InlineConfig, UserConfig } from 'vite';
import react from "@vitejs/plugin-react"

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  test: {
    global: true,
    environment: "happy-dom",
    include: ["./stories/**/*.test.ts?(x)"],

  }
} as VitestConfigExport);