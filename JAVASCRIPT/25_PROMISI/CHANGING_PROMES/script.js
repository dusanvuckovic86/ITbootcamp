




let getTodos = resurce => {

    let request = new XMLHttpRequest();
    request.open('GET', resurce);
    request.send();


    return new Promise((resolve, reject) => {                  //vracamo objekat Promise
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {

                //callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if (request.readyState === 4) {

                //callback(undefined, "Ne mogu da dohvatim podatke");
                reject("Ne mogu da dohvatim podatke");
            }
        });
    })

  
}


//prvo da se ucita todos.json, fruits.json. vegetables.json

getTodos('../JSON/todos.json').then(data => {
    console.log('Promise todos resolved', data);
    return getTodos('../JSON/fruits.json') //vracamo promise na koji se odnosi naredni then
}).then(data => {
    console.log('Promise fruits resolved', data);
    return getTodos('../JSON/vegetables.json')
}).then(data => {
    console.log('Promise fruits resolved', data)
}).catch(error => {
    console.log('Promise rejected', error)
})

console.log("Kraj")