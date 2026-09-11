function add(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

module.exports = { add, isEven, formatName };