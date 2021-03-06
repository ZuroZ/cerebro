/* eslint-disable import/no-mutable-exports, global-require */

// Core plugins
const plugins = {
  ...require('./cerebro'),
  converter: require('./converter'),
  files: require('./files'),
  google: require('./google'),
  maps: require('./maps'),
  math: require('./math'),
  openWeb: require('./openWeb'),
  translate: require('./translate')
}

if (process.platform === 'darwin') {
  // Add osx-only plugins
  plugins.apps = require('./apps')
}

module.exports = plugins
