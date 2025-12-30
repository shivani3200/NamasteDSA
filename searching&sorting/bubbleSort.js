let arr =[12,3,45,1,34,]
let n = arr.length;

function bubbleSort(arr){

    for(let i = 0; i<n-1; i++){
        let isSwapped = false;

        for(let j = 0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                isSwapped = true;
            }
            
        }
        if(isSwapped) break;
    }
    return arr;
}

let result  = bubbleSort(arr);
console.log(arr);