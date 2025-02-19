import run from '@jm/esbuild-config';
import pkg from './package.json' with { type: 'json' };

run({
  pkg
})