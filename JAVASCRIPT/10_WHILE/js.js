console.log("while petlja");

/*
let i =1;
console.log(i);//1
i++;
console.log(i);//2
i++;
console.log(i);//3
i++;
console.log(i);//4
i++;
console.log(i);//5
i++;
*/

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log(`Vrednost promenljive nakon izlaska iz WHILE petlje i je: ${i} jer pocetni uslov nije ispunjen`)

//prvi zadatak

let br = 1;
while (br <= 20) {
    console.log(br);
    br++;
}


//svi brojevi u istom redu

let rez = " ";
i = 1;
while (i <= 20) {
    rez += i + " ";
    i++;
}
console.log(rez);

//drugi zadtak

i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}


//treci zadatak
i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//drugi nacin

i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}


// document.body.innerHTML += "<p style='color:red;'>1. paragraf</p>";

// document.body.innerHTML += "<p style='color:purple;'>2. paragraf</p>";

// document.body.innerHTML += "<p style='color:green;'>3. paragraf</p>";

// document.body.innerHTML += "<p style='color:red;'>4. paragraf</p>";

// document.body.innerHTML += "<p style='color:purple;'>5. paragraf</p>";

// document.body.innerHTML += "<p style='color:green;'>6. paragraf</p>";


i = 1;
let n = 16;
while (i <= n) {

    if (i % 3 == 1) {
        document.body.innerHTML += `<p style='color:red;'>${i} paragraf</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style='color:purple;'>${i} paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style='color:green;'>${i} paragraf</p>`;
    }

    i++
}



///zadatak 6
//Odrediti sumu brojeva od 1 do 100

i = 1;
let suma = 0;
while (i <= 100) {
    suma = suma + i;
    i++
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);


/*
------------------------------------
#iteracije | i | suma
    0      | 1 | 0
    1      | 2 | 1
    2      | 3 | 3
    3      | 4 | 6

-------------------------------------
-------------------------------------
    100    |101|5050

    */


//sedmi zadatak
//Odrediti sumu brojeva od 1 do n

n = 18;
i = 1;
suma = 0;
while (i <= n) {
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`);


//deveti zadatak
//Odrediti proizvod brojeva od n do m

n = 3;
let m = 6;

i = n;
let proizvod = 1;
while (i <= m) {
    proizvod = proizvod * i;
    i++;

}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);


// deseti zadatak
//Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

