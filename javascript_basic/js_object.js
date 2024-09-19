console.log(`Javascript Object Practices`)

// let user = new Object()
let user = {}

// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };

// a = JSON.stringify(user)

// let name = 'Raushan';
// let keyName = 'name';
// let user = {
//     [keyName] : name,
// }


// user[keyName] = name,
// console.log(user)


// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
// console.log(obj)
// console.log('for' in obj)
// console.log('while' in obj)
// for (key in obj) {
//     console.log(key)
//     console.log(obj[key])
// }


// Task : https://javascript.info/object
// 1. solution 

// 2. solution
// function isEmpty(obj) {
//     for (key in obj) {
//         return false
//     }
//     return true
// }


// // deep copy
// user = {
//     name : 'raushan',
//     namoe : 'kundan ',
// }

// let user2 = {
//     test : 'test'
// }
// user2 = Object.assign({}, user)

// user2.name = 'Raushan2'

// console.log(user2)


user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
let clone = structuredClone( user);
clone.name = '55'
// clone['test'] = 'test'

console.log(clone)