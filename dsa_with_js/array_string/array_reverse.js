let array = [4,6,7,3,4,5]

function reverseArray(array) {
    let start = 0;
    let end = array.length;
    // while(start < end-1) {
    //     temp = array[start]
    //     array[start] = array[end-1]
    //     array[end -1] = temp;
    //     start ++;
    //     end --;
    // }
    for(let i=0 ; i<end ; i++){
        temp = array[i]
        array[i] = array[end-1]
        array[end -1] = temp;
        // start ++;
        end --;
        
    }
    return array;
    console.log(`output : ${array}`)
}

console.log(reverseArray(array));