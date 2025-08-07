'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  function trimed(str) {
    return str.trim();
  }

  const splitedString = sourceString.split(';');

  for (let i = 0; i < splitedString.length; i++) {
    const pairOne = splitedString[i];
    const splitedPair = pairOne.split(':');
    const trimedPair = splitedPair.map(trimed);
    const key = trimedPair[0];
    const value = trimedPair[1];

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
