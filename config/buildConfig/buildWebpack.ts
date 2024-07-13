import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/types';

export function buildWebpack (options: BuildOptions) : webpack.Configuration {

  const {mode, paths} = options;

  const isDev = mode === 'development';

  return  {
    mode: mode ?? 'development',
    entry: paths.entry,
    // entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: paths.output,
    // path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: buildPlugins(options),
  module: {
    rules: buildLoaders(options),
  },
  resolve: buildResolve(),
  devtool: isDev && 'inline-source-map',
  devServer: isDev ? buildDevServer(options) : undefined,
  };
};