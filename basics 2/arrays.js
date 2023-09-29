// Array

// const arr = [1,2,3,4,5]

// const myarr = new Array(1,2,3,4,5,6)
// console.log(myarr)



// const newArr = arr.concat(myarr)
// console.log(newArr);

// const new_num = [...arr, ...myarr]
// console.log(new_num)

const nestedArr = [1,2,3,[4,5,6],7,[6,7,8,[4,5]]]
const arr = nestedArr.flat(Infinity)
console.log(arr)

console.log(Array.from("Pabitra"))
console.log(Array.from({name: "Pabitra"})) // --> will return empty array.


