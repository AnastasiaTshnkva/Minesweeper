import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';

export function buildLoaders ({mode}: BuildOptions): ModuleOptions['rules'] {
  const isDev = mode === 'development';

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

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    assetsLoader,
    scssLoader, 
    tsLoader,
    svgrLoader,
  ];
};