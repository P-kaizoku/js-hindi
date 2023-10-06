// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const myObject = {
//     "Name": "Pabitra",
//     "age": 19
// }
// for (const key in myObject){
//     console.log(`${key}: ${myObject[key]}`)     // name: Pabitra age : 18
// }

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States of America")
map.set('FR', "France")

console.log(map);

for (const key in map) { // maps are not iterable.
    console.log(key);
}