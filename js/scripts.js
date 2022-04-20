// Business logic


function cardValidator(number) {
  // first test
  const numbers = (number + '').split('').map((i) => Number(i));

  // second test
  const reversedNumbers = numbers.reverse();

  // third test
  const everyOtherDoubled = reversedNumbers.map((n, i) => {
    if (i === 0 || i % 2 === 0) {
      return n * 2;
    } else {
      return n
    }
  });

  // fourth test
  const everyOtherDoubledDigits = everyOtherDoubled.map((n, i) => {
    if (n > 9) {
      return 1 + Number((n + '')[1]);
    } else {
      return n
    }
  });

  let everyOtherDoubledDigitsSum = 0;
  everyOtherDoubledDigits.forEach((n) => {
    everyOtherDoubledDigitsSum = everyOtherDoubledDigitsSum + n;
  })

  return everyOtherDoubledDigitsSum % 10 === 0 ? 'valid' : 'invalid';
}
