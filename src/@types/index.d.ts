import 'next-images';

declare module "*.svg" {
  const value: any;
  export = value;
}
