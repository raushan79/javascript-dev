// javascript map concept

console.log(`Learning Map`);

let arr = [1,3,4,5,6,7,8,9,10,11]

function squre(input){
    return input*input*input;
}

let output = arr.map((element, index, arr) => {
    // console.log(element, index, arr);
    if( element+element > 6)
        return element+element
})
console.log(output, arr);