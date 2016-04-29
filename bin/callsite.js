'use strict';

const callsites = require('callsites');
const findup = require('findup');
const path = require('path');

module.exports = (callback) => {
  var paths = callsites();
  var root = path.resolve(__dirname, '../../');

  // iterate over the call stack and find the first path that is not inside the i18n-future directory
  var source = paths
    .map((p) => p.getFileName())
    .reduce((src, p) => {
      if (src) {
        return src;
      } else if (path.resolve(root, p).indexOf(root) < 0) {
        return p;
      }
    }, null);
  // if such a path is found, then findup from that path to a directory containing a package.json
  /* eslint no-process-env: 0*/
  if (source) {
    findup(source, 'package.json', callback);
  } else if (process.env.NODE_ENV === 'test') {
    source = process.env.PWD;
    callback(source);
  } else {
    throw new Error('Could not find target repository in ' + `${source}`);
  }
  /* eslint no-process-env: 1*/
};
