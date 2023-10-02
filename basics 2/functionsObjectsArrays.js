// Funcitons with objs and arrs.

function cartPrice(val1, val2, ...num){  // ... --> Rest operator here.
    return num
}

// console.log(cartPrice(200, 500,100, 1000, 2000))

// Object

const user = {
    username : "Pabitra",
    age : 19
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);

}

// handleObject(user)

handleObject({
    username : "Luffy",
    age : 18
})

// Functions me objects pass krliya ab arrays pass krenge

const arr = [200, 400, 300, 500]

function returnSecondValue(getArray){
    return getArray[1];   /// index starts from zero so second value will be at position one of array.
}

console.log(returnSecondValue(arr))
console.log(returnSecondValue(user))