
// Write a function that takes an integer as input and returns the integer with its digits reversed.
// For example, if the input is 12345, the output should be 54321.
// If the input is -12345, the output should be -54321.
function reverseInteger(n) {
  let nCopy = n;
  n =  Math.abs(n);

  let reverse = 0;

  while(n>0){
    reverse = reverse * 10 + n%10;
    n = Math.floor(n/10); 
  }
  return nCopy < 0 ? - reverse : reverse;
}
let result = reverseInteger(-12345);
console.log(result);