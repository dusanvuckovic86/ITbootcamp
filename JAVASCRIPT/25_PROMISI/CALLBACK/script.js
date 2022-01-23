




let getTodos = (resurce, callback) => {
//1. Kreiranje XML objekta

let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        // console.log(request.responseText);
        callback(request.responseText, undefined);
    }
    else if (request.readyState === 4) {
        // console.log("Ne mogu da dohvatim podatke");
        callback(undefined, "Ne mogu da dohvatim podatke");
    }
});


//otvaranje kreiranog zahteva
request.open('GET', resurce);

//saljemo zahtev
request.send();
}

getTodos("../JSON/todos.json", (data, error)=>{
console.log("Callback okinuta")
//Ako je error true ispisati tu gresku
if (error){
    console.log(error); //ispisuje gresku
}
else {
    console.log(data);// ispisuje ppodatke sa kojima moze dalje da raspolaze
}
});

console.log("Kraj")