/** @type {import("prettier").Config} */
const config = {
  printWidth: 130,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
