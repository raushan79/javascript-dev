// Rotate an array by d positions
console.log("Rotate an array by d positions")

/*
Problem : 1
Given an array of integers arr[] of size N and an integer d, the task is to rotate the array elements to the left by d positions.

Examples:  


Input:  d = 4, arr[] = {3, 4, 5},
Output: 4 5 3
Rotating an array 4 times is effectively same as rotating it 4 – 3 = 1 time.

*/

// solution : 1
// type : 1

function rotateArrayByD(arr, d){
    let arrayLength = arr.length;
    for(let i = 0; i < d; i++){
        temp = arr[0];
        for (let j = 0; j < arrayLength-1; j++){
            arr[j] = arr[j+1]
        }
        arr[arrayLength-1] = temp;
    }
    console.log(`output : ${arr}`)
}

function rotateArrayByDUsingTempArray(arr, d){
    let temp = [];
    let n = arr.length;
    for(let i=d; i < n; i++){
        temp.push(arr[i]);
    }
    for(let i=0;i<d;i++){
        temp.push(arr[i])
    }
    console.log(`output : ${temp}`)
}
function gcd(a, b) {
    if(b == 0) return a;
    return gcd(b, a%b)
}


function arrayRotationByJuglingAlgo(arr, d){
    let n = arr.length;
    d = d%n;
    let g_c_d = gcd(d,n);
    for(let i=0; i < g_c_d; i++){
        let temp = arr[i];
        let j = i;
        while(true){
            k = j+d;
            if (k>=n){
                k = k-n;
            }
            if( k==i ){
                break;
            }
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }

    
}

let d = 2;
let arr = [1, 2, 3, 4, 5, 6, 7]
rotateArrayByDUsingTempArray(arr, d);
rotateArrayByD(arr, d);