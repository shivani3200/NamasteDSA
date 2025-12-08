let arr = [1,1, 5, 6];

function findSecondLargest(arr) {
    let largest = -Infinity;
    let SecondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (largest <= arr[i]) {
            SecondLargest = largest;
            largest = arr[i];
        }
        if (SecondLargest < arr[i] && largest > arr[i]) {
            SecondLargest = arr[i];
        }
    }
    return SecondLargest;
}
let x = findSecondLargest(arr);
console.log(x);