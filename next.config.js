/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/ci_cd' : '',
  output: "export",
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
