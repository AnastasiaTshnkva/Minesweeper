import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import { buildBableLoader } from './bable/buildBableLoader';

const ReactRefreshTypeScript = require('react-refresh-typescript');

export function buildLoaders (options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        namedExport: false,
        exportLocalsConvention: 'as-is',
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
      
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader',
    ],
  };


  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        { 
          loader: '@svgr/webpack', 
        options: { 
          icon: true,
          // svgoConfig: {
          //   plugins: [
          //     {
          //       name: 'convertColors',
          //       params: {
          //         curretnColor: true,
          //       }
          //     }
          //   ],
          // },
        },
        }
      ],
  };


  const bableLoader = buildBableLoader(options);

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        }
      }
    ],
  }

  return [
    assetsLoader,
    scssLoader, 
    // tsLoader,
    bableLoader,
    svgrLoader,
  ];
};