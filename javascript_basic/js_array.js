console.log(`Learning Array in Jascript`)

// create a array
const createArray = () => {
    let arr = Array.of(5) // create a array with 1 element
    
    arr = new Array(5); // create a new array with 5 elements
    arr[0] = 10
    
    // console.log(arr.length)
    
    let numArray = [1, 2, 3, 4, 5]
    numArray.splice(3,2)
    console.log(numArray)
    console.log(numArray.indexOf(10))
}

/**
 * Array build in method
 */


// executable function