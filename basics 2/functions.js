function addTwoNumbers(num1, num2){
    
    return num1 + num2
    
}

const result = addTwoNumbers(3,5)

console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        
        return "Please enter your username!"
    }
    return `${username} just logged in`

}

console.log(loginUserMessage("Pabitra"))
console.log(loginUserMessage())