import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',  // entry point of your library
  output: [
    {
      file: 'dist/index.esm.js',  // ES module output for bundlers like webpack, vite, etc
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',  // CommonJS output for Node or older bundlers
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),  // mark peer dependencies (like react) as external, don't bundle them
    resolve(),           // resolve node_modules packages
    commonjs(),          // convert CommonJS to ES modules
    postcss({
      modules: true,     // enable CSS modules
      inject: true,      // inject CSS into JS bundle at runtime (important!)
      minimize: true,    // minimize CSS
      sourceMap: true,   // include source maps for easier debugging
    }),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      declaration: true,       // generate .d.ts files for your types
      declarationDir: 'dist',  // put .d.ts files into dist folder
      rootDir: 'src',          // source folder
    }),
  ],
  external: ['react', 'react-dom'], // mark react and react-dom as external dependencies
};
