import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = buildBabelLoader(options);

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    cssLoader,
  ];
}
