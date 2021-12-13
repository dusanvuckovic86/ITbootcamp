console.log("If Else grananje");

if (true) {
    console.log("Uslov je ispunjen")
}
else {
    console.log("Uslov nije ispunjen")
}

if (false) {
    console.log("Uslov je ispunjen")
}
else {
    console.log("Uslov nije ispunjen")
}


/////////////////


a = 10;
b = 7;

if (a < b) {
    console.log("Broj " + a + "je strogo manji od broja" + b)
}
else {
    console.log(`broj ${a} je "veci" ili 'jednak broju' ${b}`);
}

let god = 27;
if (god >= 18) {
    console.log("Osoba je punoletna")
}
else {
    console.log("Osoba je maloletna")
}

//prvi zadatak
a = 6;
b = 9;

if (a > b) {
    console.log(`Broj ${a} je veci od broja ${b}`);
}
else {
    console.log(`Broj ${a} je manji od broja ${b}`);
}

//drugi zadatak

let t = 39;

if (t >= 0) {
    console.log("Temperatura je u plusu");
}
else {
    console.log("Temperatura je u minusu")
}


// treci zadatak

let pol = "Z";
// ako stavimo malo slovo m isto ce prikazati zenski avatar jer su velika i mala slova takodje razlicita u JS
if (pol == "M") {
    //prikazi avatar muskarca
    document.body.innerHTML += `<img src="asets/m.jpg">`;
}
else {
    //prikazi avatar zene
    document.body.innerHTML += `<img src="asets/z.jpg">`;
}



//cetvrti zadatak

let vreme = new Date();

let trenutnoVreme = vreme.getHours();
console.log(trenutnoVreme);

if (trenutnoVreme <= 12) {
    console.log("Prepodne")
}
else {
    console.log("Popodne")
}

//peti zadatak

let godina = new Date();
let trenutnaGodina = godina.getFullYear();
console.log(trenutnaGodina);
let godinaRodjenja = 1986;
let godinaSada = trenutnaGodina - godinaRodjenja;

if (godinaSada >= 18) {
    console.log(`Osoba je punoletna trenutno ima ${godinaSada}`)

}
else {
    console.log(`Osoba je maloletna trenutno ima ${godinaSada}`)
}





//sesti zadatak (BITAN KONCEPT POREDJENJA)

let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; //pretpostavka

//ako je pretpostavka losa uraditi njen update
if (maks < b2) {
    maks = b2;
}

if (maks < b3) {
    maks = b3;
}

document.body.innerHTML += `<p>${maks}</p>`
 //+= dodajemo na prethodni sadrzaj ako je samo = onda prelepi jer se na takav nacin dodeljuje vrednost