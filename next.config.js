/** @type {import('next').NextConfig} */
const withOffline = require("next-offline");

const config = {
  reactStrictMode: true,
};

module.exports = withOffline(config);
