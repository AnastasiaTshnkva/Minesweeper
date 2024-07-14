export interface BuildPath{
  entry: string;
  html: string;
  output: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: BuildMode;
  analyzer?: boolean;
};