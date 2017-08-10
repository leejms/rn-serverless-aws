const blacklist = require('metro-bundler/src/blacklist');

module.exports = {
  getBlacklistRE: () => blacklist([
    /api\/.*/,
  ]),
};