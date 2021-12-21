function suma(a, b) {
    return a + b;
}
console.log(suma(4, 5));// poziv funkcije


//Anonimne funkcije 

let suma2 = function (a, b) {
    return a + b;
}

console.log(suma(6, 6))

///Arrow funkcije  skracen  anonimnih funkcija

let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));



//Arrow funkcija za ispis poruke

let hello = () => {
    console.log("hello world");
}

hello();


/////////////////////////////

let pozdrav = (ime, prezime) => {
    console.log("Zdravo " + ime + " " + prezime)
};

pozdrav("Kristijan", "Zdravkovic");


//Arrow funkcija kojoj se prosledjuje ime i godine korisnika a ona ispisuje ime i da li je korisnik punoletan ili ne

let korisnik = (ime, godina) => {
    if (godina < 18) {
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color:blue">${poruka}</p>`;
    }
    else {
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color:green">${poruka}</p>`;
    }
}
korisnik("pera", 25)
korisnik("mika", 16)



//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = (n) => {
    if (n % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(neparan(25))

// Da li je broj paran ili ne

let paran = n => (n % 2 == 0);
console.log(paran(6));



//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (x, y) => {
    if (x > y) {
        return x;
    }
    else if (y > x) {
        return y;
    }
    else {
        return "Brojevi su isti";
    }
}

console.log(maks2(6, 9));

/// skracena verzija

let max3 = (a, b) => (a > b) ? a : b; //kad VRACA rezultat a ne ispisuje



let maks4 = (a, b, c, d) => {
    let maks = a;
    if (maks < b) {
        maks = b;
    }
    if (maks < c) {
        maks = c;
    }
    if (maks < d) {
        maks = d;
    }
    if (a == b && a == c && a == d) {
        maks = `Brojevi su isti`;
    }
    return maks;
}

console.log(maks4(5, 4, 8, 9));



/// drugi nacin
let maks5 = (a, b, c, d) => {
    let m1 = maks2(a, b);
    let m2 = maks2(c, d);
    let m = maks2(m1, m2);
    return m;
}

console.log(maks5(3, 5, 8, 7))


let makimalan4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

let makimalan5 = (a, b, c, d) => max2(max2(max2(a, b), c), d);


//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = (putanja) => {
    return `<img src="${putanja}">`;
}

document.body.innerHTML += slika(`https://hirahasan.com/wp-content/uploads/2021/09/javascript-illustration.png`)

///////////////////
//skracena verzija

let slika2 = (putanja) => `<img src="${putanja}">`;

document.body.innerHTML += slika2(`https://hirahasan.com/wp-content/uploads/2021/09/javascript-illustration.png`)


///////////////////
// dodatno skracene kada se navodi SAMO JEDAN PARAMETAR ne stavljamo zagrade kod parametara

let slika3 = putanja => `<img src="${putanja}">`;

document.body.innerHTML += slika3(`https://hirahasan.com/wp-content/uploads/2021/09/javascript-illustration.png`)








//Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju

let paragraf = (boja) => {
    document.body.innerHTML += `<p style="color:${boja}">Tekst paragrafa</>`;
}

paragraf("red")






//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = n => {
    if (n % 7 == 0) {
        return "Nedelja"
    }
    else if (n % 7 == 1) {
        return "Ponedeljak"
    }
    else if (n % 7 == 2) {
        return "Utorak"
    }
    else if (n % 7 == 3) {
        return "Sreda"
    }
    else if (n % 7 == 4) {
        return "Cetvrtak"
    }
    else if (n % 7 == 5) {
        return "Petak"
    }
    else {
        return "Subota"
    }

}

console.log(sedmiDan(5))

// Kraci zapis


let sedmiDan1 = n => {
    return (n % 7 == 0) ? "Ned" : (n % 7 == 1) ? "Pon" : (n % 7 == 2) ? "Uto" : (n % 7 == 3) ? "Sre" : (n % 7 == 4) ? "Cet" : (n % 7 == 5) ? "Pet" : "Sub"
}


//Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.Prebrojati koliko ima ovakvih brojeva od n do m.

let brojac = 0;
let deljivSaTri = (n, m) => {
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            console.log(brojac++);
        }
    }
}
deljivSaTri(1, 12)

//deveti zadatak

//Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;

    }
    return suma;
}

console.log(sumiraj(1, 3))

//deseti zadatak

//Napisati funkciju množi koja određuje proizvod brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

let mnozi = (n, m) => {
    proizvod = 1;
    for (let i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}
console.log(mnozi(1,5))


//jedanaesti zadatak

//Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

let arSredina = (n,m) =>{
    let suma=0;
    let brojac=0;
    for (let i = n; i <= m; i++){
        suma+=i;
        brojac++;
    }
    let sredina = suma/brojac;
    return sredina;
}

console.log(arSredina(20,39))

//trinaesti zadatak

//Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

let ceoBroj = n =>`<p style="font-size:${n}px">Neki teks paragrafa</p>`

document.body.innerHTML += ceoBroj(25)



//cetrnaesti zadatak

//Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

let petPuta = recenica =>{
    for(i=20; i<=24; i++){
        document.body.innerHTML += `<p>${recenica}</p>`
    }
}
petPuta("Recenica ispisana pet puta")