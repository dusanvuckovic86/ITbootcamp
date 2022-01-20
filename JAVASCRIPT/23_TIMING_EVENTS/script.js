console.log("1");
console.log("2");

setTimeout(() => {
    console.log("3")
}, 1000 * 4)





// function ispis (){
//     console.log("3")
// }

// setTimeout(ispis, 1000*2)



// setTimeout(function(){
//     console.log(this)//this = objekat koji poziva metodu
// }, 1000*2)



// setTimeout(() => {
//     console.log(this) //tis = window
// }, 1000 / 2);



let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let timer = null;
let clock = null;

let div = document.getElementById("result")
btn1.addEventListener("click", function () {
    let datum = new Date()
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();

    if (timer === null) {
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null;
        }, 2000);
    }

});

btn2.addEventListener("click", function () {         //uklanjanje
    clearTimeout(timer);
    timer = null;
});




///Napraviti digitalni sat na stranici koji pokazuje trenutno vreme.

let ispis = document.getElementById("ispis");

btn3.addEventListener("click", function () {
    if (clock === null) {
        clock = setInterval(() => {
            let datum = new Date()
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000 / 10)
    }
})

btn4.addEventListener("click", function () {
    clearInterval(clock);
    clock = null;
})



let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let brojcanik = document.getElementById("brojcanik");
let brojac = 0;
let ispisBrojac = brojac;


btn5.addEventListener("click", () => {

    
    if (ispisBrojac === brojac){
        ispisBrojac = setInterval(() => {
            brojac++;
            brojcanik.innerHTML = brojac;
        }, 1000/3)
    }
});

btn6.addEventListener("click", () => {
    clearInterval(ispisBrojac);
    ispisBrojac = brojac
})
