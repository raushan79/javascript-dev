function reverseArray(array, a, b) {
    let start = a;
    let end = b;
    for(let i=start ; i<end ; i++){
        temp = array[i]
        array[i] = array[end-1]
        array[end -1] = temp;
        // start ++;
        end --;
        
    }
    return array;
    console.log(`output : ${array}`)
}

function arrayRotationLeftByD(arr, d){
    let n = arr.length;
    reverseArray(arr, 0 , d)
    reverseArray(arr, d, n)
    reverseArray(arr, 0, n)
    console.log(`output : ${arr}`)

}

arrayRotationLeftByD([1, 2, 3, 4, 5, 6, 7], 2)