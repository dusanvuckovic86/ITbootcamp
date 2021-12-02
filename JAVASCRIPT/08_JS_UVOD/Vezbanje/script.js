
"use strict"// mora da se pravilno kuca JS kod

//Zadatak 1
let s= 15;
let m=21;


let odPonoci= s*60+m;
console.log("Od ponoci je proslo "+ odPonoci +" minuta");


let doPonoci = 24*60- odPonoci;
console.log("do ponoci je ostalo: " + doPonoci + " minuta")



// zadatak 2
let minOdPonoci = 909;
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada)



// zadatak 3
let cenaRobe = 1750;
let novcanica = 2000;
let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + " dinara")



//zadatak 6

let evro = 100;
let kurs = 118;

let dinari = evro * kurs;
console.log("Nakon razmene imacemo " + dinari +" dinara")

let evri = dinari / kurs;
console.log("Nakon razmene imacemo " + evri +" evra")

//zadatak 7

let evro2 = 200;
let kursEvroDinar = 118;
let kursDolarDinar = 100;

let dolari = evro2 * kursEvroDinar / kursDolarDinar;
console.log("Nakon razmene imacemo " + dolari + " dolara")

let evri2 = dolari * kursDolarDinar / kursEvroDinar;
console.log ("Nakon razmene imacemo " + evri2 + " evra")


//trenutno vreme i datum

let datum = new Date();// datum - objekat koji sadrzi podatke o trenutnom datumu i vremenu: date get methods

let godina = datum.getFullYear();
console.log(godina);

let mesec = datum.getMonth() + 1;
console.log(mesec, godina);

let datumUMesecu = datum.getDate();//datum u mesecu
let danUNedelji = datum.getDay();//dan u nedelji
console.log("Danas je " + datumUMesecu + "." + mesec + "." + godina);
console.log (danUNedelji);



