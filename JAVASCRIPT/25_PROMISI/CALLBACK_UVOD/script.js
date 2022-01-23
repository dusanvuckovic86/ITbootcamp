// Primeri callback funkcija

let myFunc = callback => {
    callback();
};

myFunc(() => {
    console.log("Callback okinuta")
});

/////////////////////////////////////

let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2)
};


//realizacija funkcije se prosledjuje kao parametar
sum((x, y) => {
    console.log(x + y)
});


//kreiramo posebnu funkciju za realkizaciju a kasnije nju prosledjujemo kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); //poziv funkcije koja realizuje ide bez zagrada

///////////////////////////////////

let racunaj = (str, callback) => {
    console.log(str);
    callback(7, 3)
}
racunaj("Oduzimanje", (x, y) => {
    console.log(x - y);
});


racunaj("Mnozenje", (x, y) => {
    console.log(x + y)

})

///////////////////////////////
//Ako zelim da rezultat callback funkcije ispisem u console.log 


let racunaj2 = (str, callback) => {
    console.log(str, callback(11, 15))
}

racunaj2("Deljenje", (a, b) => {
    return a / b
});

////////////////////////////////

let racunaj3 = (str, a, b, callback) => {
    console.log(str, callback(a, b))
}

racunaj3("Deljenje", 15, 17, (a, b) => {
    return a / b
});