function getOddNumbers(number) {
  const oddNumbersArray = [];
  // validate if number is a number
  if (typeof number !== 'number') {
    return 'The input must be a number';
  }
  if (number <= 0) {
    return 'The number must be greater than zero';
  }

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      oddNumbersArray.push(i);
    }
  }

  return oddNumbersArray;
}

// Chage this value to obtain the odd numbers
const inputNumber = 18;
const oddNumbers = getOddNumbers(inputNumber);

console.log(oddNumbers);