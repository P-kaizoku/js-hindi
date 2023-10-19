const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async is completed');
        resolve()
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("consumed")
})