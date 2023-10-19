
const chai = {
    name: 'Chai',
    price: 300,
    isAvailable: true,

    placeOrder: function(){
            console.log("Order Placed!")
    }
}


// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value  !== 'function') {
        console.log(`${key}:${value}`);
    }
} 