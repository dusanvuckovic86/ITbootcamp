

let getSomething = () => {
    let object = new Promise((resolve, reject) => {
       // resolve("Nesto resolve"); //ako je sve proslo ok
       reject("Nesto reject"); //nesto nije ok proslo, doslo je do grske
    });
    return object; //vraca promise
}


//ako je promise vretio resolve realizuje se .then() grana, ako je prommise vratio reject realizuje se .catch() grana
getSomething().then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})