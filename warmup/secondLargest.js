let arr = [1,1, 5, 6, 3, 4, 6,7 ];

function findSecondLargest(arr) {
  if(arr.length < 2){
    return null;
  }
    let largest = -Infinity;
    let SecondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (largest < arr[i]) {
            SecondLargest = largest;
            largest = arr[i];
        }
        if (SecondLargest < arr[i] &&  arr[i] !== largest) {
            SecondLargest = arr[i];
        }
    }
    return SecondLargest;
}
let x = findSecondLargest(arr);
console.log(x);