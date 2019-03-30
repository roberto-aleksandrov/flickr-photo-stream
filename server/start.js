/* eslint-disable */

require('babel-core/register');
require('babel-polyfill');

require('babel-register')({
  presets: ['env', 'stage-3'],
});

module.exports = require('./src/server');
