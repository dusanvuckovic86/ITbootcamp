console.log("For petlja");

let a = 1;
while (a <= 5) {
    console.log(`na redu je broj ${a}`);
    a++;
}

for (let i = 1; i <= 5; i++) {
    console.log(`For petlja iteracija ${i}`)
}

////////////////////////////////////////////

//Drugi zadatak

///Ispisati brojeve od 20 do 1

for (i = 20; i >= 1; i--) {
    console.log(`${i}`);
}


///////////////////////////

//Treci zadatak

// Ispisati parne brojeve od 1 do 20 
// prvi nacin
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Broj ${i} je paran broj`);
    }
}
//drugi nacin
for (i = 2; i <= 20; i += 2) //i+=2 povecavamo ga za dva, i+=3 poveca za tri
{
    console.log(i);
}

///PRIMER da i ovako moze da se ispise

for (let i = 1, k = 5; i <= k; i++) { console.log(i); }


//peti zadatak

//Odrediti sumu brojeva od 1 do n
let n = 100;
let suma = 0;
for (i = 1; i <= n; i++) {
    suma += i; //suma = suma + i;
}
console.log(suma);

//sedmi zadatak

//Odrediti proizvod brojeva od n do m

n = 2;
let m = 6;
let p = 1; //neutral za mnozenje je 1 (za sabiranje 0 zato se za sumu stavi 0), jer kada prvi broj pomnozimo sa 1 ne menjamo njegovu vrednost
for (i = n; i <= m; i++) {
    p *= i;  //p=p*i

}
console.log(`Suma brojeva od ${n} do ${m} je ${p}`);


//deveti zadatak

//Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
//<img src="slike/1.jpg">
//<img src="slike/2.jpg">
//<img src="slike/3.jpg">

for (i = 1; i <= 3; i++) {
    document.body.innerHTML += `<img src="slike/${i}.jpg">`;
}


//jedanaesti zadatak

//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let brojac = 0;
n = 5;
m = 150;
for (i = n; i <= m; i++) {
    if (i % 13 == 0) {
        brojac++;
    }
}
console.log(`Ukupno ima ${brojac} brojeva deljivih sa 13 u intervalu od 5 do 150.`)


//dvanaesti zadatak
//Ispisati aritmetičku sredinu brojeva od n do m.

n = 8;
m = 18;
suma = 0;
for (i = n; i <= m; i++) {
    suma += i;
}
console.log(suma);

let broj = 0;

for (i = n; i <= m; i++) {
    broj++;
}
console.log(broj);

let sredina = suma / broj;

console.log(`aritmeticka sredina je ${sredina}`)



//petnaesti zadatak

//Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 6;
m = 45;
suma = 0;
broj = 0;

for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        suma += i;
    }
}
for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        broj++
    }
}
console.log(`Suma brojeva je ${suma} a ukupno imamo ${broj} brojeva`);






//sesnaesti zadatak
//Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 10;
a = 3;
suma = 0;
for (i = n; i <= m; i++) {
    if (!(i % a == 0)) {
        suma += i
    }
}
console.log(suma);


//osamnaesti zadatak

//Odrediti sa koliko brojeva je deljiv uneti broj k

let z = 6;
let br = 0;
for (i = 1; i <= z; i++) {
    if (z % i == 0) {
        br++
    }

}
console.log(`Deljiv je sa ${br} brojeva`);

//while

br = 0;
i = 1;
while (i <= z) {
    if (z % i == 0) {
        br++
    }
    i++;

}
console.log(`Deljiv je sa ${br} brojeva`);


//devetnaesti zadatak 
//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

if (br == 1) {
    console.log(`broj nije ni prost ni slozen`);
}

else if (br == 2) {
    console.log(`broj je prost`);
}
else {
    console.log(`broj je slozen`);
}


//dvadeseti zadatak

let tabela = `<table border="1">`;
for (let red = 1; red <= 6; red++) {
    if (red % 2 == 0) {
        tabela +=
            `<tr style='background-color:black'>
        <td>tekst</td>
        <td>tekst</td>
        </tr>
        `
    }
    else {
        tabela +=
            `<tr>
        <td>tekst</td>
        <td>tekst</td>
        </tr>
        `
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;




