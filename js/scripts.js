// Business logic

let inputtedCard = [];
// let numberArray= text.parseInt();
let newCardNumber = [];
let everyOtherDoubled = [];

function cardValidator(number) {
  return (number + '').split('').map((i) => { return Number(i); })
}
inputtedCard.forEach(function (number) {
  numberArray.push().reverse(number);
});
inputtedCard.forEach(function (element) {
  for (let i = 0; i <= inputtedCard.lenth; i += 2) {
    everyOtherDoubled.push(element[i] * 2);
  }
});
everyOtherDoubled.forEach(function (element) {
  if (number < 9) {
    everyOtherDoubled.slice(number)
  }
});
