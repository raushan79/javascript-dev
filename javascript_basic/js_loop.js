console.log("Learning loop in javascript");
// doc :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// loop and iteration in javascript

const simpleForLoop = () => {
    for(let step = 0; step < 5; step++){
        console.log(`Waking step : ${step}`);
    }
}

const whileLoop = () => {
    // print number 1 to 10 using while loop
    let num = 0;
    while(num <10){
        num++
        if (num == 3){
            console.log(`num : ${num} skipped`);
            continue;
        }
        if (num == 5){
            console.log(`num : ${num} break`);
            break;
        }
        console.log(`num : ${num}`);
    }
}

const labledLoop = () => {
    let x = 0;
    let y = 0
    outerLoop:while(x<10){
        x++;
        innerLoop:while(y<10){
            y++;
            // here from inner loop we can break outer loop
            if(y ==6){
                break outerLoop;
            }
        }
    }
    console.log(`End : x = ${x}, y= ${y}`);
}

// for in loop on object
const forLoopOnObj = () => {
    const dummyObject = {
        name: "John Doe",
        age: 30,
        email: "johndoe@example.com",
        isActive: true,
        balance: 1000.50,
        registered: "2022-01-15",
        hobbies: ["reading", "traveling", "gaming"],
        address: {
          street: "123 Main St",
          city: "Anytown",
          country: "USA"
        },
        phoneNumbers: ["555-1234", "555-5678"],
        favoriteColors: ["blue", "green", "red"]
      };
    for( const i in dummyObject) {
        console.log('for in loop', dummyObject[i]);
    }
}

const forLoopOnArray = () => {
    const dummyArray = [3,4,5,67,65];
    for(let i in dummyArray){
        console.log(`for in loop : ${i}`);
    }

    for(let i of dummyArray){
        console.log(`for of loop : ${i}`);
    }
} 

/**
 * For in loop iterate index in array and key in object
 * for of iterate value in Array
 */










// executable function
// simpleForLoop()
// whileLoop()
// labledLoop()
// forLoopOnObj()
forLoopOnArray()