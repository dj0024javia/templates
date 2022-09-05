const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const build = () => {
  esbuild.build({
    entryPoints: ['./src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    format: 'cjs',
    target: 'node14',
    plugins: [nodeExternalsPlugin()],
  });
};

build();
