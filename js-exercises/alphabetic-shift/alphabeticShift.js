/* eslint-disable linebreak-style */
const shiftChar = char => String.fromCharCode(char.charCodeAt() + 1);
const alphabeticShift = input => [...input].map(shiftChar).join('');
export { alphabeticShift };
