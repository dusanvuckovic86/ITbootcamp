console.log(`Funkcije`);

function zdravo() {
    console.log(`Zdravo svete`);
}


zdravo(); //Ovako pozivamo funkcije
zdravo();
console.log("Hello");
zdravo();


////////////////////////////////

function stampaj($tekst) {
    console.log($tekst)
}

stampaj("Jelena");
stampaj("Stefan");

$ime = "Sofija";
stampaj($ime);


////////////////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}

korisnik("Stefan", "Stanimirovic");
korisnik("Jelena", "Matejic");


///////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`)
}

korisnikGodine(`Jelena`, `Matejic`, `27`);
korisnikGodine("Pera", "Peric", "17");

///////////////////////////////

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir);// ispisuje vrednost u konzoli
}

zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);


//////////////////////////////
function vratiZbirDvaBroja(a, b) {
    let zbir = a + b;
    // console.log("Vrati Zbir");
    return zbir; //vraca vrednost koju posle moramo da upisemo u promenljivu
    console.log("Vrati Zbir posle return");// nikad ne vraca jer se funkcija zavrsava kad se izvrsi return
}

let rezultat = vratiZbirDvaBroja(50, 70);
console.log(rezultat);


rezultat = vratiZbirDvaBroja(16, 15);
console.log(rezultat);


let rez1 = vratiZbirDvaBroja(4, 6);  //rez1 = 10
let rez2 = vratiZbirDvaBroja(5, 7);  //rez2 = 12
let rez3 = vratiZbirDvaBroja(rez1, rez2); //rez3 = 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

/////////////////////////

function voda(temperatura) {
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C`)
    if (temperatura <= 0) {
        console.log(`Voda je u cvrstom agregatnom stanju`);
    }
    else if (temperatura >= 100) {
        console.log(`Voda je u gasovitom agregatnom stanju`);
    }
    else {
        console.log(`Voda je u tecnom agregatnom stanju`);
    }
}

voda(3);
voda(100);

//drugi zadatak

//Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broj

function racunaj(br1, br2, operacija) {
    if (operacija == "+") {
        let rezultat = br1 + br2;
        console.log(rezultat);
    }
    else if (operacija == "-") {
        let rezultat = br1 - br2;
        console.log(rezultat);
    }
    else if (operacija == "*") {
        let rezultat = br1 * br2;
        console.log(rezultat);
    }
    else if (operacija == "/") {
        if (br2 == 0) {
            console.log("Deljenje nulom nije dozvoljeno");
        }
        else {
            let rezultat = br1 / br2;
            console.log(rezultat);
        }
    }
    else {
        console.log(`Pogresan unos`)
    }
}
racunaj(5, 4, "+")
racunaj(5, 4, "-")
racunaj(5, 4, "*")
racunaj(5, 4, "/")
racunaj(5, 4, "%")
racunaj(5, 0, "/")



if (true) {
    let test = "Zdravo"
    if (true) {
        console.log(test)// ovde vidi test
    }
}
//console.log(test); //ovde ne vidi test jer je definisan sa let koji je vidljiv samo u if scope


if (true) {
    let test = "Zdravo1"// linija *
    console.log(test)// ispisuje linija *
    if (true) {
        let test = "hello"//linija **
        console.log(test)// ispisuje linija **
    }
    console.log(test)// ispisuje linija *
}
//console.log(test) // ne vidi test


//LET VIDIM SAMO U OKVIRU SCOPE DOK VAR VIDIM I IZVAN NA GLOBALNOM NIVOU, AKO NE STAVIM LET ISPRED VARIJABLE PODRAZUMEVA SE DA JE VAR,ISTO TAK I AKO NE STAVIM VAR

proba = "proba";

if (true) {
    let proba = "proba"
}


if (true) {
    var promenljiva = "promenljiva";
    if (true) {
        var promenljiva = "hmmmmm";
        console.log(promenljiva)
    }
    console.log(promenljiva);
}


// function zbir(x, y) {
//     let zbir2 = x + y;
//     console.log(zbir2)
// }

// zbir(4, 7);

// function razlika(x, y) {
//     let razlika2 = x - y;
//     console.log(razlika2)
// }

// razlika(5, 8)

// function proizvod(x, y) {
//     let proizvod2 = x * y;
//     console.log(proizvod2)
// }

// proizvod(4, 6)

// function kolicnik(x, y) {
//     let kolicnik2 = x / y;
//     console.log(kolicnik2)
// }

// kolicnik(9, 3)






//treci zadatak

//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if (n % 2 != 0) {
        let tacno = "Tacno"
        return tacno;
    }
    else {
        let netacno = "Netacno"
        return netacno;
    }
}

let broj = neparan(341);
console.log(broj);

////////////////////////////////////////

function neparean1(n) {
    let rez = true;
    if (n % 2 == 0) {
        rez = false;
    }
    return rez;
}

let nep1 = neparean1(6);
console.log(nep1);






//cetvrti zadatak

//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(x, y) {
    if (x > y) {
        return x;
    }
    else if (y > x) {
        return y;
    }
    else {
        return "Brojevi su isti"
    }
}

let najveci = maks2(6, 6);
console.log(najveci);


function maks4(a, b, c, d) {
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


let najveciBroj = maks4(6, 6, 6, 6);
console.log(najveciBroj);


// Jelenino resenje

function maks4_jelena(a, b, c, d) {
    let max1 = maks2(a, b);//vraca veci izmedju a i b
    let max2 = maks2(c, d);
    let max = maks2(max1, max2);
    return max;

}
let najveciOd4Broja = maks4_jelena(5, 8, 7, 9);
console.log(najveciOd4Broja);







//peti zadatak

//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(putanja) {
    let adresa = `<img src=${putanja}>`
    return adresa;
}
document.body.innerHTML += slika("https://w7.pngwing.com/pngs/1007/564/png-transparent-java-script-logo-javascript-web-development-logo-script-text-computer-programming-internet.png");







//sesti zadatak

//Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function color(boja) {

    document.body.innerHTML += `<p style="color:${boja}">Tekst nekog paragrafa</p>`

}

color("green")


//sedmi zadatak

//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {

    if (n == 1) {
        console.log(`Ponedeljak`);
    }
    else if (n == 2) {
        console.log(`Utorak`);
    }
    else if (n == 3) {
        console.log(`Sreda`);
    }
    else if (n == 4) {
        console.log(`Cetvrtak`);
    }
    else if (n == 5) {
        console.log(`Petak`);
    }
    else if (n == 6) {
        console.log(`Subota`);
    }
    else if (n == 0) {
        console.log(`Nedelja`);
    }
}

sedmiDan(3);


//Osmi zadatak

//Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.Prebrojati koliko ima ovakvih brojeva od n do m


//////////////////////////////
let n = 3;
let m = 12;

function deljivSaTri() {

    for (i = n; i <= m; i++) {
        if (i % 3 == 0)
            console.log(i);
    }
}

function brojac() {

    for (i = n; i <= m; i++) {
        if (i % 3 == 0) {
            brojac8 = 0;
            brojac8++;

        }
        console.log(brojac8)
    }
}
deljivSaTri();
brojac();

/////////////////////////////

// Jelenino resenje

function deljivSa3(n, m) {

    let brojac = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brojac++;
        }
    }
    console.log(`Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m} je ${brojac}`)
}
deljivSa3(3, 24)




//Trinaesti zadatak

//Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

//kao sto smo prosledjivali boju tako i velicinu

function recenica13(n){
    document.body.innerHTML += `<p style="font-size:${n}px">Recenica kojoj je font velicine broja prosledjenog funkciji`
}
recenica13(25)



//cetrnaesti zadatak

//Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 


function recenica14(recenica) {
    for (n = 16; n <= 20; n++) {
        document.body.innerHTML += `<p style="font-size:${n}px">${recenica}</p>`;
    }
}
recenica14("Recenica koju ispisujemo pet puta");




function petPuta(recenica) {
    for (let i = 1; i <= 5; i++) {
        document.body.innerHTML += `<p style="font-size:${i}px">${recenica}</p>`;
    }
}
petPuta("Recenica koju pisemo pet puta");

//petnaesti zadatak

//Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami. Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).


function ukupnoPlata(n, a, d) {
    let suma = a;
    for (i = 2; i <= n; i++) {
        suma += a + d;

    } return suma;
}
let plata = ukupnoPlata(3, 50000, 5000);
console.log(plata);






// Aleksandar
function praksa_aleksandar(n, a, d) {
    let suma = a;         // da izbegnemo   if (i==1)   jer prvog meseca nema povisice
    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            suma += a + d; // povisica (d)
        }
    }
    return suma;
}
// n = meseci rada
// a = plata
// d = povisica
let p = praksa_aleksandar(3, 50000, 5000);
console.log(p);





//Plata poslednjeg meseca

function praksa(a, n, d) {
    for (i = 2; i <= n; i++) {
        a += d
    }
    return a;
}
let zarada = praksa(50000, 3, 5000);
console.log(zarada);




//16 Zadatak

//Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
//npr: t=15, p=20, n=25, čekanje je 0s
//npr: t=15, p=10, n=12, čekanje je 7s


function vremeCekanja(t, p, n) {
    let ostatakPreklapanja1 = t - p;
    let ostatakPreklapanja2 = n - t;
    let cekanjeF = ostatakPreklapanja1 + ostatakPreklapanja2;
    return cekanjeF;
    
}

let cekanje = vremeCekanja(15, 10, 12);

console.log(cekanje);


//////////////////////// resenje Kristina 

function vreme(t, p, n) {
    let čekaj = n + p - t;
    if (p > t || t >= p + n) {
        console.log(`Burke samo piči`);
    }
    else {
        console.log(`Burke treba da krene kroz ${čekaj} sec da ne bi čekao most`);
    }
}
vreme(15, 10, 12);