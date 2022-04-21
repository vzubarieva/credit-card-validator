### Tests

## MinumumViableProduct MinimumExpectedOutcome: 
  - Checks credit card number is valid/not valid
  - Checks digits on number to validate
  - starting from right to left, double every other digit within number (i.e. 3 becomes 6 and 4 becomes 8)
  - if doubled, the new digit becomes a double-digit number, add the two digits of that number. (i.e. if 6 doubled is 12, add the 1 + 2 to obtain the final digit of 3.
- Each digit of the new, now doubled numbers, should be added together and the sum should end in a 0.  i.e. 
    original set: 4102 0808 8043 5620
    doubled set: 4204 0707 8046 5320
    sum of doubled set: 4 + 2 + 0 + 4 + 0 + 7 + 0 + 7 + 8 + 0 + 4 + 6 + 5 + 3 + 2 + 0= 52
    OutCome: Credit Card number INVALID: sum does not equal to a number ending in 0.

Test: take input, split string into individual numbers
Code: cardValidator("4765980755324913");
Expected output: 4765980755324913 -> 4 7 6 5 9 8 0 7 5 5 3 2 4 9 1 3

Test: reverse inputtedCardNumber from right to left 
Code: cardValidator("4765980755324913");
Expected output: 3 1 9 4 2 3 5 5 7 0 8 9 5 6 7 4

Test: double every other digit
Code: cardValidator("4765980755324913");
Expected Output: 6 1 18 4 4 3 10 5 14 0 16 9 10 6 14 4

Test: split the integers of double digit-numbers, add together 'sliced' number
Code: cardValidator("4765980755324913");
Expected Output: 18 -> 1 8:  6, 1, '1,8', 4, 4, 3, '1,0', 5, '1,4', 0, '1,6', 9, 1 0, 6, 1 4, 4
Expected outcome: 1,8 -> 1+8= 9  6, 1, '9', 4, 4, 3, '1', 5, '5', 0, '7', 9, 1, 6, 5, 4

Test: sum all of the digits in the new transformed set of numbers
Code: cardValidator("4765980755324913");
Expected Output: 6+1+9+4+4+3+1+5+5+0+7+9+1+6+5+4 = 70 

Test: inputted sum to end in an 0
Code: cardValidator("4765980755324913");
  <!-- if remainder of inputtedSum doesNOT equal to 0, card is invalid -->
Expected Output: "Card is not valid"

Description: Validate the First Digits of the Credit Card Number
Test: take input, split string into individual numbers
Code:
Expected Output:3765980755324913 -> 3 7 6 5 9 8 0 7 5 5 3 2 4 9 1 3

Test: first digits 2 numbers (American Express cards always begin with the numbers 34 or 37)
Code: if 
Expected Output: 3 7 6 5 9 8 0 7 5 5 3 2 4 9 1 3 -> valid American Express card

