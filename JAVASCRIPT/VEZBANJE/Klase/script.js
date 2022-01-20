import { Boja, Datum } from "./klase.js";



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