//Prvi zadatak

//Naći i ispisati najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.

let a = 111;
let b = 650;
let c = 965;

if (a > b && a > c) {
    console.log(`Broj ${a} je najveci`);
    if (b > c) {
        console.log(`Broj ${b} je srednji`);
        console.log(`Broj ${c} je najmanji`);
    }
    else {
        console.log(`Broj ${c} je srednji`);
        console.log(`Broj ${b} je najmanji`);
    }
}
else if (b > a && b > c) {
    console.log(`Broj ${b} je najveci`);
    if (a > c) {
        console.log(`Broj ${a} je srednji`);
        console.log(`Broj ${c} je najmanji`)
    }
    else {
        console.log(`Broj ${c} je srednji`);
        console.log(`Broj ${a} je najmanji`);
    }
}
else {
    if (c > a && c > b) {
        console.log(`Broj ${c} je najveci`);
        if (a > b) {
            console.log(`Broj ${a} je srednji`);
            console.log(`Broj ${b} je najmanji`);
        }
        else {
            console.log(`Broj ${b} je srednji`);
            console.log(`Broj ${a} je najmanji`);
        }
    }
}



//Drugi zadatak

//Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let t;

if (t < -15 || t > 45) {
    console.log(`Ekstremna temperatura`);
}
else {
    console.log(`Temperatura je u normali`);
}




//Treci zadatak

//Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.

let god = 2020;

if (god % 4 == 0 && (god % 100 != 0 || god % 400 == 0)) {
    console.log(`Godina ${god} je prestupna`);
}
else {
    console.log(`Godina ${god} nije prstupna`);
}

//Cetvrti zadatak

//Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let vreme = new Date();
let vremePC = vreme.getHours();
console.log(vremePC);

let dan = new Date();
let danPC = dan.getDay();
console.log(danPC);

if (vremePC > 9 && vremePC <= 20) {
    if (danPC >= 1 && danPC <= 5) {
        console.log(`Butik je otvoren`);
    }
}
else if (vremePC > 10 && vremePC <= 18) {
    if (danPC == 0 || danPC == 6) {
        console.log(`Butik je otvoren`);
    }
}
else {
    console.log(`Butik je zatvoren`);
}


//Peti zadatak

//Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg meseca. Rezultat ispisati na ekranu i u konzoli.

let datum = new Date();
let datumPC = datum.getDate();
let godinaPC = datum.getFullYear();
let mesecPC = datum.getMonth() + 1;
let brojDanaUMesecu = new Date(godinaPC, mesecPC, 0).getDate();

let danaDoKrajaMeseca = brojDanaUMesecu - datumPC;

console.log(`Do kraja meseca ostalo je ${danaDoKrajaMeseca} dana`);
document.body.innerHTML += `<p>Do kraja meseca ostalo je ${danaDoKrajaMeseca} dana</p>`



//Sesti zadatak

//Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m površine lokala. Za posmatrani kafić su dati podaci da ima v m i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami.Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.


let v = 150;
let n = 49;
let vPoOsobi = 3;
let dozvoljenoOsoba = v / vPoOsobi;
let moraDaIzadje = n - dozvoljenoOsoba;

if (n > dozvoljenoOsoba) {
    document.body.innerHTML += `<p style="color:red">Ne, potrebno je da ${moraDaIzadje} osoba izadje iz lokala!</p>`;
}
else {
    document.body.innerHTML += `<p style="color:green">Da</p>`;
}



//Sedmi zadatak


/*Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se
njihove smene preklapaju.
Ulaz (vrednosti koje samostalno dodeljujete promenljivama) :
● Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i
pocMinLek1)
● Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i
krajMinLek1)
● Početak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i
pocMinLek2)
● Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i
krajMinLek1)
Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
● Početak radnog vremena prvog lekara (izraženo u satima i minutima)
● Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
● Početak radnog vremena drugog lekara (izraženo u satima i minutima)
● Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
● Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u
satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva
lekara, na ekranu ispisati da nema preklapanja.
*/

let pocSatLek1 = 4;
let pocMinLek1 = 0;
let krajSatLek1 = 19;
let krajMinLek1 = 0;

let pocSatLek2 = 4;
let pocMinLek2 = 0;
let krajSatLek2 = 10;
let krajMinLek2 = 32;

document.body.innerHTML += `<p>Pocetak radnog vremena prvog lekara je u <b>${pocSatLek1}</b> sati i <b>${pocMinLek1}</b> minuta.`;

document.body.innerHTML += `<p style="color:red">Kraj radnog vremena za prvog lrkara je u ${krajSatLek1} sati i ${krajMinLek1} minuta.`;

document.body.innerHTML += `<p>Pocetak radnog vremena drugog lekara je u <b style="color:blue">${pocSatLek2}</b> sati i <b style="color:blue">${pocMinLek2}</b> minuta.`;

document.body.innerHTML += `<p style="color:orange; font-style:italic">Kraj radnog vremena za drugog lrkara je u ${krajSatLek2} sati i ${krajMinLek2} minuta.`;


let pocetakSmeneLek1 = pocSatLek1 * 60 + pocMinLek1;
let krajSmeneLek1 = krajSatLek1 * 60 + krajMinLek1;

let pocetakSmeneLek2 = pocSatLek2 * 60 + pocMinLek2;
let krajSmeneLek2 = krajSatLek2 * 60 + krajMinLek2;


let preklapanje1 = krajSmeneLek1 - pocetakSmeneLek2;
let sat1 = Math.trunc(preklapanje1 / 60);
let min1 = preklapanje1 % 60;

let preklapanje2 = krajSmeneLek2 - pocetakSmeneLek1;
let sat2 = Math.trunc(preklapanje2 / 60);
let min2 = preklapanje2 % 60;

let preklapanje3 = krajSmeneLek2 - pocetakSmeneLek2;
let sat3 = Math.trunc(preklapanje3 / 60);
let min3 = preklapanje3 % 60;

let preklapanje4 = krajSmeneLek1 - pocetakSmeneLek1;
let sat4 = Math.trunc(preklapanje4 / 60);
let min4 = preklapanje4 % 60;



if (krajSmeneLek1 > pocetakSmeneLek2 && pocetakSmeneLek1 < pocetakSmeneLek2 && krajSmeneLek2 > krajSmeneLek1) {
    document.body.innerHTML += `<p>Smene se preklapaju za ${sat1} sati i ${min1} minuta</p>`;
}
else if (krajSmeneLek2 > pocetakSmeneLek1 && pocetakSmeneLek2 < pocetakSmeneLek1 && krajSmeneLek1 > krajSmeneLek2) {
    document.body.innerHTML += `<p>Smene se preklapaju za ${sat2} sati i ${min2} minuta</p>`;
}
else if (pocetakSmeneLek1 < pocetakSmeneLek2 && krajSmeneLek2 < krajSmeneLek1) {
    document.body.innerHTML += `<p>Smene se preklapaju za ${sat3} sati i ${min3} minuta</p>`;
}
else if (pocetakSmeneLek2 < pocetakSmeneLek1 && krajSmeneLek1 < krajSmeneLek2) {
    document.body.innerHTML += `<p>Smene se preklapaju za ${sat4} sati i ${min4} minuta</p>`;
}
else if (pocetakSmeneLek1 == pocetakSmeneLek2) {
    if (krajSmeneLek1 < krajSmeneLek2) {
        document.body.innerHTML += `<p>Smene se preklapaju za ${sat4} sati i ${min4} minuta</p>`;
    }
    else {
        document.body.innerHTML += `<p>Smene se preklapaju za ${sat3} sati i ${min3} minuta</p>`;
    }

}
else if (krajSmeneLek1 == pocetakSmeneLek2 || krajSmeneLek2 == pocetakSmeneLek1) {
    document.body.innerHTML += `<p> Smene se ne preklapaju</p>`;
}
else {
    document.body.innerHTML += `<p>Smene se ne preklapaju</p>`;
}


//Osmi zadatak


/*Za uneta dva broja i karakter napraviti kalkulator koji vrši:
● Množenje ta dva broja ukoliko je uneto slovo ’m’
● Deljenje ukoliko je uneto slovo ’d’
● Sabiranje ukoliko je uneto slovo ’s’
● Oduzimanje ukoliko je uneto slovo ’o’ */

let br1 = 656;
let br2 = 1002;
let slovo = 'm';

if (slovo == 'm' || slovo == 'M'){
    console.log(br1 * br2)
}
else if (slovo == 'd' || slovo == 'D'){
    console.log(br1 / br2)
}
else if (slovo == 's' || slovo == 'S'){
    console.log(br1 + br2)
}
else if (slovo == 'o' || slovo == 'O'){
    console.log(br1 - br2)
}
else {
    console.log(`Pograsan unos`)
}
