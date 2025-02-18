import run from '@jm/esbuild-config';
import pkg from './package.json' with { type: 'json' };
import {vanillaExtractPlugin} from "@vanilla-extract/esbuild-plugin"

run({
  pkg,
  config: {
    plugins: [vanillaExtractPlugin()]
  }
})