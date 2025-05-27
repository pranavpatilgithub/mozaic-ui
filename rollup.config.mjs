import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),  
    resolve(),           
    commonjs(),          
    postcss({
      modules: false,       // Enable CSS modules
      inject: true,  // Extract CSS into dist/styles.css
      minimize: true,      // Minify CSS
      sourceMap: true,     
    }),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      declaration: true,       
      declarationDir: 'dist',  
      rootDir: 'src',          
    }),
  ],
  external: ['react', 'react-dom'],  
};
