export interface BuildPath{
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'desctop' | 'mobile';

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: BuildMode;
  analyzer?: boolean;
  platform: BuildPlatform;
};