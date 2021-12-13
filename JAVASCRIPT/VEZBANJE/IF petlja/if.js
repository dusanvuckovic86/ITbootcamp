"use strict"

console.log(`JavaScript vezbe`);


//prvi zadatak

let br1 = 96;
let br2 = 89;

if (br1 < br2) {
    console.log(`Broj ${br1} je manji od broja ${br2}`);
}
else {
    console.log(`Broj ${br2} je manji od broja ${br1}`);
}


//drugi zadatak

let temp = 29;

if (temp >= 0) {
    console.log(`Temperatura od ${temp} stepeni je visa od nule`)
}
else {
    console.log(`Temperatura od ${temp} stepeni je niza od nule`)
}

//treci zadatak

let pol = "z";

if (pol == "m") {
    document.body.innerHTML += `<img src="../../09_IF_GRANANJE/asets/m.jpg">`;}
else {
        document.body.innerHTML += `<img src="../../09_IF_GRANANJE/asets/z.jpg">`;
    }

//cetvrti zadatak

let vreme = new Date();
let vremeNaPc = vreme.getUTCHours();
console.log(vremeNaPc);

if (vremeNaPc <= 12){
    console.log(`Jutro je`);
}
else{
        console.log(`Popodne je`);
    }

//peti zadatak

let godina = new Date();
let godinaTrenutno = godina.getUTCFullYear();
console.log (godinaTrenutno);
let godinaRodjenja = 1995;
let starost = godinaTrenutno - godinaRodjenja;

if (starost >= 18){
    console.log (`Osoba je punoletna ima ${starost} godina`)
}
    else {
        console.log (`Osoba je maloletna ima ${starost} godina`)
    }


//sesti zadatak

let broj1 = 89;
let broj2 = 132;
let broj3 = 46;
let broj4 = 254;

let maks = broj1;

if (maks < broj2){
    maks = broj2
}
if (maks < broj3){
    maks = broj3
}
if (maks < broj4){
    maks = broj4
}

console.log (`Broj ${maks} je najveci`);



// sedmi zadatak 

let bodovi = 82;


if (bodovi > 100){
    console.log(`Pogresan unos`)
}
else if(bodovi == 100){
    console.log(`Ucenik je osvojio ${bodovi} bodova i dobio ocenu 10`)
}
else if (bodovi > 90){
    console.log(`Ucenik je osvojio ${bodovi} bodova i dobio ocenu 10`)
}
else if (bodovi > 80){
    console.log(`Ucenik je osvojio ${bodovi} bodova i dobio ocenu 9`)
}
else if (bodovi > 70){
    console.log(`Ucenik je osvojio ${bodovi} bodova i dobio ocenu 8`)
}
else if (bodovi > 60){
    console.log(`Ucenik je osvojio ${bodovi} bodova i dobio ocenu 7`)
}
else if (bodovi > 50){
    console.log(`Ucenik je osvojio ${bodovi} bodova i dobio ocenu 6`)
}
else {
    console.log (`Pali ste ispit`)
}





//osmi zadatak

let dan = new Date();
let danSaPc = dan.getUTCDay();
console.log(danSaPc);

if (danSaPc == 0){
    console.log("Vikend");
}
else if (danSaPc == 6){
    console.log("Vikend");
}
else{
    console.log("Radni dan");
}



//deveti zadatak

let vreme1 = new Date();
let vremeSaPc = vreme1.getHours();
console.log(vremeSaPc);


if (vremeNaPc < 12){
    console.log(`Dobro jutro`);
}
else if (vremeNaPc < 18){
    console.log(`Dobro dan`);
}
else{
console.log(`dobro vece`);
}



//deseti zadatak

let d1 = 18;
let m1 = 9;
let g1 = 2020;

let d2 = 16;
let m2 = 9;
let g2 = 2021;

if (g1 < g2){
console.log(`Prvi uneti datum je raniji`);
}
else if ( g2 < g1){
    console.log(`Drugi uneti datum je raniji`);
}
else if (m1 < m2){
    console.log(`Prvi uneti datum je raniji`);
}
else if ( m2 < m1){
    console.log(`Drugi uneti datum je raniji`);
}
else if (d1 < d2){
    console.log(`Prvi uneti datum je raniji`);
}
else if ( d2 < d1){
    console.log(`Drugi uneti datum je raniji`);
}
else {
    console.log(`Datumi su isti`);
}



// jedanaesti zadatak

let vreme2 = new Date();
let vremeSaPc2 = vreme2.getHours();


if (vremeSaPc2 < 9){
    console.log(`Zatvoreno`);
}
else if (vremeSaPc2 >= 17){
    console.log(`Zatvoreno`);
}
else {
    console.log(`Otvoreno`)
}



// dvanaesti zadatak

let lp1 = 7;
let lk1 = 18;

let lp2 = 6;
let lk2 = 17;

if (lk1 < lp2){
    console.log("Ne poklapaju se");
}
else if (lk2 < lp1){
    console.log("Ne poklapaju se");
}
else {
    console.log("Poklapaju se");
}

// trinaesti zadatak

let broj5 = 183;

if (broj5 % 2 == 0){
    console.log(`Broj ${broj5} je paran`);
}
else {
    console.log(`Broj ${broj5} nije paran`);
}

// cetrnaesti zadatak

let broj6 = 18;

if (broj6 % 3 == 0){
    console.log(`Broj ${broj6} je deljiv sa 3`);
}
else {
    console.log(`broj ${broj6} nije deljiv sa 3`);
}


// petnaesti zadatak

//Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let broj7 = 32;
let broj8 = 42;

if (broj7 > broj8){
    document.body.innerHTML += broj7 - broj8;
}
else {
    document.body.innerHTML += broj8 - broj7;
}

//sesnaesti zadatak

//Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let broj9 = 745;

if (broj9 <= 0){
    console.log( broj9 - 1);
}
else {
    document.body.innerHTML += ++broj9 ;
}

//sedamnaesti zadatak

// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od nih je najmanji. 

let br3 = 132;
let br4 = 98;
let br5 = 155;

let najveci = br3;

if (najveci < br4){
    najveci = br4;
}
if (najveci < br5){
    najveci = br5;
}
console.log(`Broj ${najveci} je najveci broj`);



let najmanji = br3;

if (najmanji > br4){
    najmanji = br4;
}

if (najmanji > br5){
    najmanji = br5;
}

console.log(`Broj ${najmanji} je najmanji broj`);

let srednji = br3 + br4 + br5 - najveci - najmanji;

console.log(`broj ${srednji} je srednji`);