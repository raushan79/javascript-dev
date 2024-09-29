console.log(`Learning Reduce`);

let arr = [1,3,4,5,6,7,8,9,10,11]

let output = arr.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue)
    return accumulator ;
}, 0)

console.log(output);