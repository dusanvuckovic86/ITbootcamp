//Zadatak 1


// ➢ Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za
// vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je
// ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u
// konzoli.
// Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst
// „Radno vreme još uvek nije počelo“.
// Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst
// „Radno vreme je već završeno“.


let vreme = new Date();
let sati = vreme.getHours();
let minuti = vreme.getMinutes();

let vremePC = sati * 60 + minuti;
let pocetakSmene = 9 * 60;
let krajSmene = 17 * 60;

let doKraja = krajSmene - vremePC;
let satDoKraja = Math.trunc(doKraja / 60);
let minDoKraja = doKraja % 60;

console.log(`Do kraja smene je ostalo ${satDoKraja} i ${minDoKraja} minuta`);


if (vremePC < pocetakSmene) {
    console.log(`Radno vreme jos nije pocelo`);
}
else if (vremePC > krajSmene) {
    console.log(`Radno vreme je zavrseno`);
}
else {
    console.log(`Cvecara je otvorena`);
}



//drugi zadatak


// ➢ Prilikom transporta buketa cveća u drugi grad, potrebno je platiti
// poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće
// sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na
// cenu izračunate poštarine po sledećoj tarifi:
// ➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na
// pošiljku preko 2kg pošta daje popust od 10%.
// ➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika
// je cena poštarine bez popusta i sa popustom.
// Ispis treba da bude u formatu:
// Cena bez popusta je _____ dinara.
// Cena sa popustom je _____ dinara.

let postarina = 5;
let tezina = 1000;

let postarinaBezPopusta = postarina * tezina;
console.log(`Cena bez popusta je ${postarinaBezPopusta}`)

// let cena = postarinaBezPopusta *95/100;
// console.log(cena)


if (tezina >= 1000 && tezina <= 2000) {

    cena = postarinaBezPopusta * 95 / 100;
    console.log(`Cena sa popustom je ${cena}`);
}
else if (tezina > 2000) {
    cena = postarinaBezPopusta * 90 / 100;
    console.log(`Cena sa popustom je ${cena}`);
}
else {
    console.log(`Nemate popust cena je ${postarinaBezPopusta} `);
}


// Zadatak 3
// ➢ Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža
// koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli
// ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki
// kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u
// radnji.
// ➢ Primer 1:
// ○ Broj ruža u cvećari 101
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po
// 5 ruža).
// ➢ Primer 2:
// ○ Broj ruža u cvećari 100
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po
// 4 ruže).

let ruze = 120;
let brojKupaca = 20;

let brojRuzaPoKupcu = ruze / brojKupaca;

let brojRuzaPoKupcuZaokruzeno = Math.floor(brojRuzaPoKupcu);


let ukupnoPotrebnoRuza = brojKupaca * brojRuzaPoKupcuZaokruzeno + brojKupaca;

let dokupiti = ukupnoPotrebnoRuza - ruze;
let ruzePoKupcuSaDokupljenim = ukupnoPotrebnoRuza / brojKupaca;
console.log(dokupiti);

if (dokupiti == 0) {
    console.log(`Potrebno je dokupiti ${dokupiti} ruza kako bi svaki kupac dobio po ${ruzePoKupcuSaDokupljenim} ruza`)
    }
else {
    console.log(`Nije potrebno dokupljivati ruze svaki kupac dobija po ${brojRuzaPoKupcu} ruza`)
}







////////////////////////////////////////


// let ruze = 100;
// let kupci = 26;
// ostatak = ruze % kupci;
// let ruze2 = 0;
// if (ostatak != 0) {
//     ruze2 = kupci - ostatak;
// }
// else {
//     ruze2 = 0;
// }

// console.log(ostatak)
// console.log(`Broj ruza koje cvecarka treba da dokupi je ${ruze2}`);




//cetvrti zadatak


// ➢ Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve
// n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m
// odredite sami.
// U konzoli ispisati:
// ● U prvom redu ispisati sumu
// ● U drugom redu ispisati broj brojeva
// ● U trećem redu ispisati proizvod sume i broja brojeva

let n = 5;
let m = 7;
let suma = 0;
i = n;

for (i = n; i <= m; i++) {
    if (i % 7 == 0 && i % 2 != 0)
        suma += i
}
console.log(suma);


let brojac = 0;

for (i = n; i <= m; i++) {
    if (i % 7 == 0 && i % 2 != 0)
        brojac++
}

console.log(brojac);

let proizvod = suma * brojac;
console.log(proizvod);



//Zadatak 5
// ➢ Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja
// brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i
// m).
// ➢ Rezultat računanja ispisati u konzoli.


n = 2;
m = 5;
suma = 0;

for (i = n; i <= m; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        suma += i;
    }
}

brojac = 0;

for (i = n; i <= m; i++) {
    if (i % 10 == 3) {
        brojac++
    }
}

let razlika = suma - brojac;
console.log(`Razlika iznosi ${razlika}`)