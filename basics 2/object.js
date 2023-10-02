// const MySym = Symbol("key1");

// const JsUser = {
//     name: "Pabitra",
//     [MySym]: 'mykey1',
//     age: 19,
//     location: "Delhi",
//     email: "pabitra@google.com",
//     isLoggedIn: false
// }

// console.log(JsUser["email"])
// console.log(JsUser[MySym])
// console.log(typeof JsUser[MySym])
// console.log(typeof MySym)



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3)
