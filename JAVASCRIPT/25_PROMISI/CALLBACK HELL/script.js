




let getTodos = (resurce, callback) => {

    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {

            callback(request.responseText, undefined);
        }
        else if (request.readyState === 4) {

            callback(undefined, "Ne mogu da dohvatim podatke");
        }
    });
    request.open('GET', resurce);
    request.send();
}

//Ovo radimo kad hocemo po odredjenom redosledu da ucitavamo fajlove

getTodos("../JSON/todos.json", (data, error) => {
    console.log("Callback okinuta")

    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
        getTodos('../JSON/fruits.json', (data, error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(data);
                getTodos('../JSON/vegetables.json', (data, error) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(data)
                    }
                })
            }
        })
    }
});

console.log("Kraj")