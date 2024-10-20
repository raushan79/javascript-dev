console.log(`Learning About Javascript Object.`);
// resource link : https://javascript.info/object
// mdn resource link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

const basicAboutObject = () => {
  console.log(`Bascript Object`);
  let obj = {name : "raushan"};

  // add property
  obj.address = 'AT Bara Post Ekma Supaul Bihar';

  // check exist property
  let res = obj.hasOwnProperty('name');
  res = obj.hasOwnProperty('last_name');
  // other way
  res = 'address' in obj
  // console.log('res', res);


  // all the object keys
  let keys = Object.keys(obj);
  console.log('keys ', keys)
  // access all the object value
  let values = Object.values(obj);
  console.log('values ', values)
  let keysValues = Object.entries(obj);
  console.log('keysValues ', keysValues);
  console.log('________________________________________________________________')

  console.log('obj -> ', Object(obj))

};

















// call the function 
basicAboutObject()
