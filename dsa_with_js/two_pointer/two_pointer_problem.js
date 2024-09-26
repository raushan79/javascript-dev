
// problem to find the sum of any two is equal to the target or not
let arr = [10,20,30,,35,50]
let target = 70;

// brute force algorithm
function bruteForce(arr, target) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if((arr[i]+arr[j] == target) && (i !=j)){
                console.log(`True`)
                return true
            }
        }
    }
    console.log(`False`)
    return false
}

function two_pointer_technique(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum == target) {
            return true;
        }else if (sum < target) {
            left ++
        }else {
            right --
        }
    }
    return false
}

// bruteForce(arr, target)
let result = two_pointer_technique(arr, target)
console.log(result)