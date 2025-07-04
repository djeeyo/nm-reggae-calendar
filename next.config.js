/** @type {import('next').NextConfig} */
const nextConfig = {
  // don’t bundle these on the server—let Node require() them at runtime
  serverExternalPackages: [
    'lightningcss',
    'lightningcss-win32-x64-msvc',
    'browserslist'
  ],

  // keep the default Turbopack settings otherwise
};

module.exports = nextConfig;
