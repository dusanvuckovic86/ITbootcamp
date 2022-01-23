import { Boja, Datum, Radnik, Autobus, Radio } from "./klase.js";



//BOJA


let boja1 = new Boja(200, true, true)
let boja2 = new Boja(1400, true, false)
let boja3 = new Boja(10000, false, false)
let boja4 = new Boja(1400, true, false)

let ispitajSlicnost = (b1, b2) => {
    if ((b1.talasnaDuzina == b2.talasnaDuzina) && (b1.intenzitet == b2.intenzitet) && (b1.zasicenost == b2.zasicenost)) {
        return true
    }
    else {
        return false
    }
}

console.log(boja3.zasicenje)
console.log(boja4.zasicenje)

console.log(ispitajSlicnost(boja3, boja4))


let nizBoja = [boja1, boja2, boja3, boja4];

let srednjaTalasnaDuzina = arr => {
    let suma = 0;
    arr.forEach(element => {
        suma += element.talasnaDuzina
    });
    return suma / arr.length
}
console.log(srednjaTalasnaDuzina(nizBoja))



//DATUM

let datum1 = new Datum(15, 9, 2021)
let datum2 = new Datum(15, 6, 2021)
let datum3 = new Datum(15, 3, 1990)
let datum4 = new Datum(6, 9, 1986)


let ranijiDatum = (d1, d2) => {
    if (d1.godina < d2.godina) {
        console.log(`Prvi uneti datum je raniji`);
    }
    else if (d2.godina < d1.godina) {
        console.log(`Drugi uneti datum je raniji`);
    }
    else if (d1.mesec < d2.mesec) {
        console.log(`Prvi uneti datum je raniji`);
    }
    else if (d2.mesec < d1.mesec) {
        console.log(`Drugi uneti datum je raniji`);
    }
    else if (d1.dan < d2.dan) {
        console.log(`Prvi uneti datum je raniji`);
    }
    else if (d2.dan < d1.dan) {
        console.log(`Drugi uneti datum je raniji`);
    }
    else {
        console.log(`Datumi su isti`);
    }
}
ranijiDatum(datum1, datum4)

///RADNIK

let radnik1 = new Radnik("Petar", 50000);
let radnik2 = new Radnik("Marko", 70000);
let radnik3 = new Radnik("Jovana", 80000);
let radnik4 = new Radnik("Milica", 80000);

//Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.
let nizradnika = [radnik1, radnik2, radnik3, radnik4]
let maksPlata = arr => {
    let maks = arr[0].plata;
    arr.forEach(radnik => {
        if (maks < radnik.plata) {
            maks = radnik.plata
        }
    })
    return maks
}

console.log(`Najveca plata je ${maksPlata(nizradnika)}`)

//Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakom od radnika sa maksimalnom platom.

let maksPlataOsoba = arr => {
    let niz = [];
    arr.forEach(element => {
        if (element.plata == maksPlata(arr)) {
            niz.push(element)
        }
    })
    return niz
}

console.log(maksPlataOsoba(nizradnika))




////////////////////////////////////////////////

//Autobus

let autobus1 = new Autobus("bg-1789-po", 25);
let autobus2 = new Autobus("po-6555-po", 45);
let autobus3 = new Autobus("ks-1389-po", 65);
let autobus4 = new Autobus("ni-1789-po", 32);

let nizAutobusa = [autobus1, autobus2, autobus3, autobus4];

autobus4.stampaj()


//Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.


let ukupnoSedista = arr => {
    let suma = 0;
    arr.forEach(autobus => {
        suma += autobus.brojSedista
    });
    return suma
}

console.log(`Ukupno je ${ukupnoSedista(nizAutobusa)} sedista`);


//Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.

let maksSedista = arr => {
    let maks = arr[0].brojSedista;
    let index = arr[0];
    arr.forEach(autobus => {
        if (maks < autobus.brojSedista) {
            maks = autobus.brojSedista
            index = autobus;
        }
    })
    return index

}
console.log(maksSedista(nizAutobusa))

//Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.

let ljudi = (arr, br) => {
if (br <= ukupnoSedista(arr)){
    return true
}
else {
    return false
}
}

console.log(ljudi(nizAutobusa, 180))


////////////////////////////////////////////////////

//RADIO

//Napraviti metodu promeniZvuk kojoj se prosleđuje simbol plus ili minus i koja  po pozivu jačinu zvuka menja isključivo za 1 stupanj. Ukoliko je prosleđen simbol + povećati jačinu zvuka za 1, u suprotnom smanjiti jačinu zvuka za 1. Voditi računa o tome da jačina zvuka ne sme biti manja od 0 i veća od 20 (Ova metoda ništa ne vraća, samo promeni vrednost zvuka).
