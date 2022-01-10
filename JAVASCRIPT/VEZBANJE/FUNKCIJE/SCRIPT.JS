// prvi zadatak

//Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.Pozvati funkciju i njen rezultat ispisati u konzoli.


let sumaKubova = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i * i * i;
    }
    return suma;
}

console.log(sumaKubova(2, 3))


//drugi zadatgak

//Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba.Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. Pozvati funkciju i dobijeni rezultat ispisati u konzoli.

let godine = (godRodjenja) => {
    let godina = new Date();
    let godinaPC = godina.getFullYear();
    let brojGodina = godinaPC - godRodjenja;
    return brojGodina;
}
console.log(godine(1959));

//treci zadatak

//Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.


let deljiv = (n, m, k) => {
    let brojac = 0;
    for (let i = n; i <= m; i++) {

        if (i % k == 0) {
            brojac++
        }
    }
    return brojac;
}
console.log(deljiv(2, 9, 3))


//cetvrti zadatak

//Pilot želi da napravi program gde unosi vreme poletanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju pilot kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

let pilot = (vPs, vPm, vSs, vSm) => {
    let ukupnoMinutaPoletanje = vPs * 60 + vPm;
    let ukupnoMinutaSletanje = vSs * 60 + vSm;

    let trajanjeLeta = ukupnoMinutaSletanje - ukupnoMinutaPoletanje;

    let satiLeta = Math.floor(trajanjeLeta / 60);
    let minutiLeta = trajanjeLeta % 60;
    return `Let je trajao ${satiLeta} sati i ${minutiLeta} minuta`
}

console.log(pilot(12, 15, 18, 20))


// peti zadatak

//Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju jaban koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

let jaban = (jabuke, banane) => {
    let jabukeOstatak = jabuke * 80 / 100;
    let upotrbljivihJabuka = Math.floor(jabukeOstatak);

    let brojPorcijaJabuke = upotrbljivihJabuka / 2;
    let porcijaJ = Math.floor(brojPorcijaJabuke);
    let brojPorcijaBanane = banane / 3;
    let porcijaB = Math.floor(brojPorcijaBanane);

    if (brojPorcijaJabuke < brojPorcijaBanane) {
        return `Moguce je napraviti ${porcijaJ} jaban kolaca`;
    }
    else {
        return `Moguce je napraviti ${porcijaB} jaban kolaca`;
    }

}

console.log(jaban(24, 15))

//sesti zadatak

//Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara u odnosu na platu prethodnog meseca. Brojeve n, a i d određujete sami. Napišite funkciju praksa kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu u odnosu na prethodni mesec. Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

/////////////////////

//PRIMER SA CASA


// let praksa = (a,n,d) => {
//     let suma = a;
//     for(let i = 2; i<=n; i++){
//         suma += a + d;
//     }
//     return suma;
// }
// console.log(praksa(50000,3,5000));



let praksa = (a, n) => {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let d = suma * 10 / 100;
        suma += a + d;

    }
    return suma;
}
console.log(praksa(50000, 3))



//sedmi zadatak

//Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).



function fabrika(a, b, c) {
    //1. poredjam ih da a>b i b>c, tako da cemo morati da ih ispremestamo
    // analogija: sipanje soka iz jedne case u drugu -> sipamo u trecu casu prvo, da bi sacuvali jedan sok iz jedne case, itd.
    if (a < b) {
        let pomocni = a;
        a = b;
        b = pomocni;
    }
    if (a < c) {
        let pomocni = a;
        a = c;
        c = pomocni;
    }
    //ovim gore smo osigurali da je a najvece
    if (b < c) {
        let pomocni = b;
        b = c;
        c = pomocni;
    }
    // varijanta 1: prosledjeno 40> 30> 20> d -> fali duzina 10
    if (a - b == b - c) {
        return c - (b - c); //od c oduzimamo razliku i dobijemo cetvrti nogar
    }
    // varijanta 2: prosledjeno 40>b>20>10 -> fali 30
    else if (a - b == 2 * (b - c)) {
        return a - (b - c);
    }
    // varijanta 3: prosledjeno 40>30>c>10 -> fali 20
    else if (a - b == (b - c) / 2) {
        return b - (a - b);
    }
    else {
        return 0; //umesto da izbaci gresku
    }
}
console.log(fabrika(30, 40, 50))


//osmi zadatak

//Napisati funkciju prethodniDan kojoj se prosleđuju tri pozitivna cela broja koja predstavljaju dan, mesec i godinu jednog ispravnog datuma (najuporniji mogu da ispituju i da li su dobre prosleđene vrednosti :) ). Funkcija ispisuje tri cela broja koja predstavljaju dan, mesec i godinu jučerašnjeg datuma. Svi brojevi se ispisuju u jednom redu, a iza svakog broja navodi se tačka.



//     if (g % 4 == 0 && (g % 100 != 0 || g % 400 == 0)) {
//         if (d >= 2 && d <= 31 && m != 3) {
//             console.log(`Jucerasnji datum je ${d - 1}.${m}.${g}`)
//         }
//         else if (d == 1) {
//             if (m >= 2 && m <= 12 && m != 3) {
//                 console.log(`Jucerasnji datum je ${d = 31}.${m = m - 1}.${g}`)
//             }
//             else if (m == 1) {
//                 console.log(`Jucerasnji datum je ${d = 31}.${m = 12}.${g - 1}`)
//             }
//             else if (m == 3) {
//                 console.log(`Jucerasnji datum je ${d = 29}.${m = m - 1}.${g}`)
//             }
//             else {

//                 console.log(`Pogresan unos`)

//             }

//         }
//         else {

//         }

//     }
//     else {
//         if (d >= 2 && d <= 31 && m != 3) {
//             console.log(`Jucerasnji datum je ${d - 1}.${m}.${g}`)
//         }
//         else if (d == 1) {
//             if (m >= 2 && m <= 12 && m != 3) {
//                 console.log(`Jucerasnji datum je ${d = 31}.${m = m - 1}.${g}`)
//             }
//             else if (m == 1) {
//                 console.log(`Jucerasnji datum je ${d = 31}.${m = 12}.${g - 1}`)
//             }
//             else if (m == 3) {
//                 console.log(`Jucerasnji datum je ${d = 28}.${m = m - 1}.${g}`)
//             }
//             else {

//                 console.log(`Pogresan unos`)

//             }

//         }
//     }


// }



function prethodniDan(d, m, g) {

    switch (m) {
        case m = 1:
        case m = 2:
        case m = 4:
        case m = 6:
        case m = 8:
        case m = 11:
            if (d >= 2 && d <= 31) {
                console.log(`Jucerasnji datum je ${d - 1}.${m}.${g}`)
            }
            else if (d == 1) {
                if (m >= 2 && m <= 12) {
                    console.log(`Jucerasnji datum je ${d = 31}.${m = m - 1}.${g}`)
                }
                else if (m == 1) {
                    console.log(`Jucerasnji datum je ${d = 31}.${m = 12}.${g - 1}`)
                }
                else {

                    console.log(`Pogresan unos`)

                }
            }
            break;


        case m = 5:
        case m = 7:
        case m = 10:
        case m = 12:
            if (d >= 2 && d <= 30) {
                console.log(`Jucerasnji datum je ${d - 1}.${m}.${g}`)
            }
            else if (d == 1) {
                if (m >= 2 && m <= 12) {
                    console.log(`Jucerasnji datum je ${d = 30}.${m = m - 1}.${g}`)
                }
                else if (m == 1) {
                    console.log(`Jucerasnji datum je ${d = 30}.${m = 12}.${g - 1}`)
                }
                else {

                    console.log(`Pogresan unos`)

                }
            }

            break;

        case m = 3:
            if (g % 4 == 0 && (g % 100 != 0 || g % 400 == 0)) {
                if (d >= 2 && d <= 31) {
                    console.log(`Jucerasnji datum je ${d - 1}.${m}.${g}`)
                }
                else if (d == 1) {
                    console.log(`Jucerasnji datum je ${d = 29}.${m = m - 1}.${g}`)
                }
            }
            else {
                if (d >= 2 && d <= 31) {
                    console.log(`Jucerasnji datum je ${d - 1}.${m}.${g}`)
                }
                else if (d == 1) {
                    console.log(`Jucerasnji datum je ${d = 28}.${m = m - 1}.${g}`)
                }
            }

    }

}
prethodniDan(31, 2, 2021)