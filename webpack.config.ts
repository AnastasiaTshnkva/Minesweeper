import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/buildConfig/buildWebpack';
import { BuildMode, BuildPath, BuildPlatform } from './config/buildConfig/types/types';

interface EnvVariables {
  mode?: BuildMode,
  port?: number,
  analyzer: boolean,
  platform?: BuildPlatform,
}

export default (env: EnvVariables) => {

  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desctop',
  });

  return config;
};