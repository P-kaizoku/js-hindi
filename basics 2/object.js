const MySym = Symbol("key1");

const JsUser = {
    name: "Pabitra",
    [MySym]: 'mykey1',
    age: 19,
    location: "Delhi",
    email: "pabitra@google.com",
    isLoggedIn: false
}

console.log(JsUser["email"])
console.log(JsUser[MySym])
console.log(typeof JsUser[MySym])
console.log(typeof MySym)