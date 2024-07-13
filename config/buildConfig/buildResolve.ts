import {Configuration} from 'webpack';

export function buildResolve ():Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}