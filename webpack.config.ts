import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/buildConfig/buildWebpack';
import { BuildMode, BuildPath } from './config/buildConfig/types/types';

interface EnvVariables {
  mode: BuildMode,
  port: number,
  analyzer: boolean,
}

export default (env: EnvVariables) => {

  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
  }

  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
  });

  return config;
};