
let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, "String", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);//za pristupanje index-u nekog elementa. Indeksiranje pocinje od 0, pa je prvi element 0
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);//undefined jer u nizu nema cetvrtog elementa


console.log(random[4][1]); //Kad pristupamo nizu unutar niza, prvo ide index na kom se nalazi niz a potom index tog cemu zelimo da pristupimo u nizu

cars[0] = "Peugeot";//Menjamo vrednost elementa niza dodeljivanjem vrednosti
console.log(cars);

//cars[0] = undefined; //ako zelimo da uklonimo neki element, onda niz preskace taj indeks


//for (let i = 0; i <= cars.length - 1; i++)

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}


//Prvi zadatak

//Ispisati sve elemente niza od 5 stringova.

let nizPrvi = ["Auto", "Benzin", "Dizel", "Motor", "BMW"];

console.log(nizPrvi)



//drugi zadatak

//Odrediti zbir elemenata celobrojnog niza.
let nizDrugi = [5, 6, 2, 3]
let sumaElemenata = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}

console.log(sumaElemenata(nizDrugi))


// ///////////////////////////////////////////

// // VISE NIZOVA

let niz1 = [3, 4, 5];
let niz2 = [1, 2, 3];
let niz3 = [4, 5, 6];

let sumaElemenataViseNizova = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}
console.log("suma prvog niza je:" + sumaElemenataViseNizova(niz1));
console.log("suma drugog niza je:" + sumaElemenataViseNizova(niz2));
console.log("suma treceg niza je:" + sumaElemenataViseNizova(niz3));






// //treci zadatak

// //Odrediti proizvod elemenata celobrojnog niza.


let nizTreci = [2, 5, 8]

let proizvodElemenata = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}
console.log("Proizvod niza je:" + proizvodElemenata(nizTreci))
console.log("Proizvod niza je:" + proizvodElemenata(nizDrugi))





//Cetvrti zadatak

//Odrediti srednju vrednost elemenata celobrojnog niza.
let nizCetvrti = [2, 3, 4]
let arSredina = niz => {
    let suma = 0;
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        brojac++;
    }
    return (brojac != 0) ? suma / brojac : 0;
}
console.log(arSredina(nizCetvrti))



//////////////////DRUGI NACIN

//Kada koristimo funkciju u kojoj smo prethodno izracunali aritmeticku sredinu a brojac poziva funkciju niz.length

let arSredina2 = niz => {
    let suma = sumaElemenata(nizCetvrti);
    let brojac = niz.length;
    return (brojac != 0) ? suma / brojac : 0;
}
console.log(arSredina2(nizCetvrti))




///////////////TRECI NACIN

let arSredina3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;
console.log(arSredina3(nizCetvrti))



// 4.1 zadatak //  Odrediti srednju vrednost parnih elemenata niza


let nizCetvrti1 = [2, 3, 4, 5, 6, 7, 8];

let arSredina41 = niz => {
    let suma = 0;
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            brojac++;
        }
    }
    return (brojac != 0) ? suma / brojac : 0;
}

console.log(arSredina41(nizCetvrti1))



// Peti zadatak

//Odrediti srednju vrednost parnih elemenata celobrojnog niza.

let nizPeti = [2, 56, 47, 31]

let maxVrednost = niz => {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
    }
    return max;
}

console.log(maxVrednost(nizPeti))




//Sesti zadatak

//Odrediti minimalnu vrednost u celobrojnom nizu.


let nizSesti = [2, 3, 4, -1, 9, 2, 1];


let minVrednost = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
        }
    }
    return min;
}

console.log(minVrednost(nizSesti))






//sedmi zadatak

//Odrediti indeks maksimalnog elementa celobrojnog niza.



let niz7 = [9, 1, 2, 13, 4, 5];


let maxIndex = niz => {

    let max = niz[0];
    let maxIndex = 0;

    for (i = 0; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
console.log(maxIndex(niz7))

// zadatak 7.1

// Oderditi broj maksimalnih elemenata niza

let niz71 = [1, 2, 3, 4, 5, 6, 6, 6]


let brMax = niz => {
    let maks = niz[0];
    let brojac = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > maks) {
            maks = niz[i];
        }
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == maks) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brMax(niz71))


// //osmi zadatak

// //Odrediti indeks minimalnog elementa celobrojnog niza.
let niz8 = [4, 5, 2, 6, 1, 8]

let MinimalniIndex = niz => {
    let min = niz[0];
    let minIndex = 0;
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(MinimalniIndex(niz8))



// //deveti zadatak

// //Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.


let nizDeveti = [9, 56, 2, 5, 6, 3, 1, 32, 25, 8];



let veciBrojOdSrednjeVr = niz => {
    let suma = 0;
    let brojac = 0;
    let brojac2 = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        brojac++;
    }

    let srednjaVrednost = suma / brojac;
    console.log(srednjaVrednost)

    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > srednjaVrednost) {
            brojac2++;
        }
    }
    return brojac2;
}

console.log(veciBrojOdSrednjeVr(nizDeveti))




//deseti zadatak

//Izračunati zbir pozitivnih elemenata celobrojnog niza.

let nizDeseti = [-2, 5, 4, -8, -9, 4, 3];

let zbirPozitivnih = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(zbirPozitivnih(nizDeseti))


//jedanaesti zadatak

//Odrediti broj parnih elemenata u celobrojnom nizu.

let nizJedanaesti = [1, 2, 3, 4, 5, 6, 7, 8, 4, 8];

let zbirParnih = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            brojac++
        }
    }
    return brojac
}
console.log(zbirParnih(nizJedanaesti));



//dvanaesti zadatak

//Odrediti broj parnih elemenata sa neparnim indeksom.

let nizDvanaesti = [1, 2, 3, 4, 5, 6, 7, 8];

let brojParnihSaNeparnimIndeksom = niz => {

    let brojac = 0;

    for (let i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brojParnihSaNeparnimIndeksom(nizDvanaesti))




//trinaesti zadatak

//Izračunati sumu elemenata niza sa parnim indeksom.

let nizTrinaesti = [1, 2, 3, 4, 5, 6, 7, 8];

let sumaParniI = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(sumaParniI(nizTrinaesti))



//cetrnaesti zadatak

//Promeniti znak svakom elementu celobrojnog niza.

let nizCetrnaesti = [1, -8, -5, 2, 3, -7, -9];

let promeniZnak = niz => {
    for (let i = 0; i < niz.length; i++) {
        niz[i] = niz[i] - niz[i] * 2;
    }
    return niz;
}
console.log(promeniZnak(nizCetrnaesti))


//petnaesti zadatak 

// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let nizPetnaesti = [1, -8, -5, 2, 3, -7, -9];

let promeniZnakNeparnomElementu = niz => {

    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
            niz[i] = niz[i] - niz[i] * 2
        }

        return niz;
    }
    console.log(promeniZnakNeparnomElementu(nizPetnaesti))


    //sesnaesti zadatak

    //Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.


    let listaStringova = ["jabuke", "banane", "krompir", "hleb", "mleko", "krofne"];


    let neuredjenaLista = niz => {


        let lista = "<ul>"
        for (let i = 0; i < niz.length; i++) {

            lista += `<li>${niz[i]}</li>`;

        }
        lista += "</ul>"
        return lista;
    }
    document.body.innerHTML += neuredjenaLista(listaStringova)

    // document.getElementById('d1').innerHTML += listaKupovine(lista);





    //sedamnaesti zadatak


    //Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

    let tim = ["Zvezda", "Partizan", "CSKA", "Vojvodina"];


    let tabelaTima = niz => {

        let tabela = `<table>`;
        for (let i = 0; i < niz.length; i++) {
            tabela += `<tr><td>${niz[i]}</td></tr>`;
        }
        tabela += `</table>`;
        document.body.innerHTML += tabela;
    }


    tabelaTima(tim);






    //osamnaesti zadatak

    //Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

    let nizSlika = [`https://www.onlycroatia.com/media/cities/124/4281.jpg`, `https://www.onlycroatia.com/media/cities/124/7322.jpg`, `https://www.onlycroatia.com/media/cities/124/6525.jpg`, `https://www.onlycroatia.com/media/cities/124/6753.jpg`, `https://www.onlycroatia.com/media/cities/124/1518.jpg`];



    let slike = niz => {
        for (let i = 0; i < niz.length; i++) {
            document.body.innerHTML += `<img src="${niz[i]}">`
        }
    }

    slike(nizSlika)




    //devetnaesti zadatak

    //Ispisati dužinu svakog elementa u nizu stringova.


    let lista19 = ["jabuke", "krompir", "banane", "hleb", "mleko", "krofne"];


    let duzinaElemenata = niz => {
        for (let i = 0; i < niz.length; i++) {
            console.log(niz[i].length)
        }
    }

    duzinaElemenata(lista19)





    //dvadeseti zadatak

    //Odrediti element u nizu stringova sa najvećom dužinom.


    let cars201 = ["Toyota", "BMW", "Volvo", "Volkswagen"];


    let najduziElement = niz => {

        let maxDuzina = niz[0].length;
        let maxString = niz[i];

        for (let i = 0; i < niz.length; i++) {

            if (maxDuzina < niz[i].length) {
                maxDuzina = niz[i].length;
                maxString = niz[i];
            }

        }
        return maxString;
    }

    console.log(najduziElement(cars201));




    //dvadesetprvi zadatak

    //Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.



    let cars21 = ["Toyota", "BMW", "Volvo", "Volkswagen", "Audi"];

    let duzinaVecaOdSrVr = niz => {
        let suma = 0;
        for (let i = 0; i < niz.length; i++) {
            suma += niz[i].length;
        }
        let sRVr = suma / niz.length;


        let brojac = 0;
        for (let i = 0; i < niz.length; i++) {
            if (niz[i].length > sRVr) {
                brojac++;
            }
        }
        return brojac;
    }

    console.log(duzinaVecaOdSrVr(cars21))



    // //dvadesetdrugi zadatak

    // //Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.


    let niz22 = ["jabuke", "krompir", "banane", "hleb", "mleko", "krofne", "vodA"];

    let slovaA = niz => {
        let brojac = 0;
        for (let i = 0; i < niz.length; i++) {
            if (niz[i].includes("a") || niz[i].includes("A")) {
                brojac++;
            }
        }
        return brojac;
    }

    console.log(slovaA(niz22))



    // Broj odredjenog karaktera


    let niz221 = ["jabuke", "krompir", "banane", "hleb", "mleko", "krofne", "vodA"];

    let brojKaraktera = niz => {
        let brojac = 0;

        for (let i = 0; i < niz.length; i++) {
            let element = niz[i];
            for (let k = 0; k < niz.length; k++) {
                if (element[k] == "k") {
                    brojac++;
                }
            }
        }
        return brojac;
    }

    console.log(brojKaraktera(niz221))



    //dvadesettreci zadatak


    //Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

    let cars23 = ["Toyota", "BMW", "Volvo", "Volkswagen", "Audi"];

    let brojStringovaPrvoA = niz => {
        let brojac = 0;

        for (let i = 0; i < niz.length; i++) {
            if (niz[i].charAt(0) == "a" || niz[i].charAt(0) == "A") {
                brojac++;
            }
        }
        return brojac;
    }

    console.log(brojStringovaPrvoA(cars23))

    //dvadesetcetvrti zadatak


    let a = [1, 4, 7, -5];
    let b = [1, 4, 7, -5];

    let zadatak24 = (a, b) => {
        let c = [];
        for (let i = 0; i < a.length; i++) {
            c[2 * i] = a[i];
            c[2 * i + 1] = b[i]
        }
        return c
    }

    let rezultat = zadatak24(a, b);
    console.log(rezultat)
}