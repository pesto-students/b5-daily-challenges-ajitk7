/* eslint-disable linebreak-style */
function abbreviateString(str) {
  if (typeof str === 'string') {
    const abbreviateStringArray = str.split(' ');
    const { 0: firstWord, [abbreviateStringArray.length - 1]: lastWord } = abbreviateStringArray;
    return `${firstWord} ${lastWord.charAt(0).toUpperCase()}.`;
  }
  // eslint-disable-next-line no-throw-literal
  throw '';
}

export { abbreviateString };
