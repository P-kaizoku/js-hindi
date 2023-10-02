// Global and Local scope


// let a = 10
// const b = 20
// var c = 30

// c = 50
// a = 60
// console.log(a,c)
{
    let x = 10; // block scoped!!
}
let x  = 20;

{
    var a = 10;// Not block scoped!!
}
console.log(a)
console.log(x);