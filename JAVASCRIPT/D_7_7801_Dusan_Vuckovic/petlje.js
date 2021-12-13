//deveti zadatak

//Ispisati dvostruku vrednost brojeva od 5 do 15.



//Deseti zadatak

//Odrediti sumu brojeva od n do m .

let n = 1;
let m = 9;
let suma = 0;
let i = n;

while (i <= m) {
    suma += i;
    i++;
}
console.log(suma);

//Jedanaesti zadatak

//Odrediti sumu kvadrata brojeva od n do m.


n = 1;
m = 3;
suma = 0;
i = n;

while (i <= m) {
    suma = suma + i * i;
    i++;
}
console.log(suma);

//Dvanaesti zadatak

//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

n = 20;
m = 100;
let proizvod = 1;
i = n;

while (i <= m) {
    if (i % 11 == 0) {
        proizvod = proizvod * i;
    }
    i++;
}
console.log(proizvod);

//Trinaesti zadatak

//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

n = -25;
m = 32;
let brojac1 = 0;
let brojac2 = 0;



for (i = n; i <= m; i++) {
    if (i < 0) {
        brojac1++;
    }
    if (i > 0) {
        brojac2++;
    }
}
console.log(`Negativnih brojeva je ${brojac1}, pozitivnih brojeva je ${brojac2}.`);

//Cetrnaesti zadatak

//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.

n = 5;
m = 50;
let brojac = 0;

for (i = n; i <= m; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        brojac++;
    }
}
console.log(`U intervalu od ${n} do ${m} ukupno je ${brojac} brojeva deljivih sa 3 ili sa 5.`);

//Petnaesti zadatak

//Odrediti proizvod brojeva od n do m koji su deljivi brojem a.

let a = 4;
n = 5;
m = 10;

proizvod = 1;

for (i = n; i <= m; i++) {
    if (i % a == 0) {
        proizvod = proizvod * i;
    }
}

console.log(`Proizvod brojeva deljivih sa brojem ${a} u intervalu od ${n} do ${m} iznosi ${proizvod}`);


//Sesnaesti zadatak

/* Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem
3 i neparni su (to su brojevi 3 i 15)
Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3
(3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1. */

let ceoBroj = 6;

// let delioci = " ";


// for (i = 1; i <= ceoBroj; i++) {
//     if (ceoBroj % i == 0) {

//         delioci += i + " ";
//     }
// }
// console.log(delioci);

let brojac16 = 0;

for (i = 1; i <= ceoBroj; i++) {
    if (i % 3 == 0 && i % 2 != 0) {
        brojac16++;
    }
}
console.log(brojac16);


//Sedamnaesti zadatak

//Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.

let broj17 = 255;
suma = 0;

while (broj17) {
    suma = suma + broj17 % 10;
    broj17 = Math.floor(broj17 / 10);
}

console.log(suma);


//Osamnaesti zadatak

//Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici.
let li;
let lista = `<ul>`;
for (li = 1; li <= 10; li++) {
    if (li % 3 == 0) {
        lista +=
            `<ul>
        <li>tekst</li>
             </ul>`
    }
    else {
        lista +=
            `<li>tekst</li>`
    }
}
lista += `</ul>`;
document.body.innerHTML += lista;

//Devetnaesti zadatak

//Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.



let red = `<span>`;

for (red = 1; red <= 8; red++) {

    if (red % 2 == 0) {
        let span = `<span>`;

        for (span = 1; span <= 8; span++) {

            if (span % 2 == 0) {

                document.body.innerHTML += `<span style='color:white; background-color: white;border:1PX solid #000000'>TEKST</span>`
            }
            else {

                document.body.innerHTML += `<span style='color:black; background-color: black;border:1PX solid #000000'>TEKST</span>`
            }
        }

        span += `</span>`;
        document.body.innerHTML += `<br>`
    }
    if (red % 2 != 0) {
        let span = `<span>`;

        for (span = 1; span <= 8; span++) {

            if (span % 2 == 0) {

                document.body.innerHTML += `<span style='color:black; background-color: black;border:1PX solid #000000'>TEKST</span>`
            }
            else {

                document.body.innerHTML += `<span style='color:white; background-color: white;border:1PX solid #000000'>TEKST</span>`
            }
        }

        span += `</span>`;
        document.body.innerHTML += `<br>`
    }



}
red += `</span>`;


