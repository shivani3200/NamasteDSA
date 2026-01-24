 

 let arr = [1,8,4,9,2,6];
 let n=  arr.length;

 function selectionSort(arr){
 for(let i = 0; i<n-1; i++){
    let min = i;
    for(let j = i+1; j<n;j++){
        if(arr[min]>arr[j]){
            let temp = arr[min];
            arr[min] = arr[j];
            arr[j] = temp;
        }
    }
 }

 return arr;
}
let sortedArr = selectionSort(arr);
console.log(sortedArr);