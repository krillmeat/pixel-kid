import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/boot.js',
  output: [{
    file: 'bundle.js',
    format: 'cjs'
  },
  {
    file: 'bundle.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  }],
  plugins: [babel({ babelHelpers: 'bundled' })]
};
