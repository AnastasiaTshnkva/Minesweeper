import webpack, { DefinePlugin } from 'webpack';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/types';
import path from 'path';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');



export function buildPlugins ({mode, paths, analyzer, platform}:BuildOptions) : Configuration['plugins'] {

  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ 
      template: paths.html, 
      favicon: path.resolve(paths.public, 'favicon.png'),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
    
  ]

  if(isDev) {
    plugins.push(
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  };

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),);
  };

  if(analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

 return plugins;
};