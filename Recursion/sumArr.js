let arr = [1,2,3,4,10];
function sum(arr,n){
  if(n==0) return arr[0];
  return arr[n] + sum(arr, n-1);
}
let result = sum(arr, arr.length -1);
console.log(result);