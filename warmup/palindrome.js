// Check if a number is a palindrome
// A palindrome is a number that remains the same when its digits are reversed.
// For example, 121 is a palindrome, but 123 is not.



function isPalindrome(n) {
  if(n<0) return false; // negative numbers are not palindromes
let temp = 0;

let originalNumber = n;

while(n > 0){
  temp = temp * 10 + (n % 10);
  n = Math.floor(n / 10);
}
// if( temp === originalNumber) return true;
// return false;
return temp === originalNumber;
} 

let res = isPalindrome(18981);
console.log(res);

