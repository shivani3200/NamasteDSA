// let n = 123456;

// let count = 0;
//  let temp = n;
//  while(temp > 0){
//   // temp = temp/10;
//   temp = Math.floor(temp/10);
//   count++;
//  }
//  console.log(count);

// Function to count digits in a number

function countDigit(n){
   if(n == 0)return 1; // edge case
   n = Math.abs(n); // to handle negative numbers
  let count = 0;
  let temp = n;
  while(temp> 0){
    temp = Math.floor(temp/10);
    count ++;
  }
  return count;
}

let c = countDigit(-12345);
console.log(c);