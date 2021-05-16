const tailwindcss = require('tailwindcss');
tailwindcss('./tailwind.config.js');
// module.exports = {
//   plugins: [require('postcss-nested'), tailwindcss('./tailwind.config.js'), require('autoprefixer')]
// };
module.exports = {
  plugins: {
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {}
  }
};
