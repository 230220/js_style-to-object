'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((declaration) => declaration.split(':').map((str) => str.trim()))
      .filter(([key, value]) => key && value),
  );
}
module.exports = convertToObject;
