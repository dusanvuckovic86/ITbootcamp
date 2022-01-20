import Film from "./film.js";


// konstruktor se poziva kod kreiranja novog objekta ovo new ga signalizira

let film1 = new Film("Maratonci trce pocasni krug", "Slobodan Sijan", 1982, [5, 5, 5, 5]);
let film2 = new Film("Inception", "Cristopher Nolan", 1789, [9, 5, 7, 9, 6]);
let film3 = new Film("Zodiac", "David Fincher", 2007, [9, 7, 7, 5]);
let film4 = new Film("Zodiac", "David Fincher", 2007, [9, 3, 8, 5]);

console.log(film1)

film1.stampaj()


// promena imena
// testiramo da li seter za naslov radi

// film1.naslov = "Taxi";
// film1.stampaj();


//testiranje getera
console.log(film1.reziser);

// dodavanje ocene u film1

// film1.dodajOcenu(10);
// film1.stampaj()


/// prikaz svih filmova u tabelici

let tabelica =
    `<table border="1">
<tr>
<th>Naziv filma</th>
<th>Reziser</th>
<th>Godina izdanja</th>
<th>Ocene</th>
<th>Prosecna ocena</th>
</tr>`;
let filmovi = [film1, film2, film3, film4];
filmovi.forEach(film => {
    tabelica +=
        `<tr>
    <td>${film.naslov}</td>
    <td>${film.reziser}</td>
    <td>${film.godinaIzdanja}</td>
    <td>${film.ocene}</td>
    <td>${film.prosek()}</td>
    </tr>`;
})

tabelica += `</table>`;
document.body.innerHTML = tabelica;



///prosek


console.log(film1.prosek())



// filmovi vek


let vekFilmova = (arr, v) => {

    arr.forEach(element => {
        let vek = Math.ceil(element.godinaIzdanja / 100)
        if (v == vek) {
            console.log(element.naslov)
        }
    })
}

vekFilmova(filmovi, 20)





//prosecna ocena 

let prosecnaOcena = arr => {
    let suma = 0;
    let brojac = 0;
    arr.forEach(film => {
        suma += film.zaUProsek()
        brojac += film.ocene.length
    });
    return suma / brojac
}
console.log(`Prosek ocena je ${prosecnaOcena(filmovi)}`)


//najbolje ocenjen

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let najboljeOcenjeni = arr => {
    let najbolji = arr[0].prosek()
    for (let i = 0; i < arr.length; i++) {
        if (najbolji < arr[i].prosek()) {
            najbolji = arr[i].prosek()
        }
    }
    return najbolji
}
console.log(najboljeOcenjeni(filmovi))


//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.


/*
globalni prosek 7
film1prosek 7.5  film1prosek - globalniProsek = 0,5
film2prosek 8.3
film3prosek 9


*/

let osrednjiFilm = arr => {
    let globalniProsek = prosecnaOcena(arr);
    let najbliziProseku = arr[0] // pretpostavka da je prvi najblizi proseku
    let najmanjaRazlikaOdProseka = globalniProsek - najbliziProseku.prosek();

    arr.forEach(film => {
        let prosecnaOcenaFilma = film.prosek();
        if (Math.abs(globalniProsek - prosecnaOcenaFilma) < Math.abs(najmanjaRazlikaOdProseka)) {
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek - prosecnaOcenaFilma);
            najbliziProseku = film;
        }
    })
    return najbliziProseku
}

osrednjiFilm(filmovi).stampaj();
// console.log(film1.prosek());
// console.log(film2.prosek());
// console.log(film3.prosek());
// console.log(film4.prosek());


//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najFilm = arr => {
    let najbolji = arr[0].prosek();
    let naj = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (najbolji < arr[i].prosek()) {
            najbolji = arr[i].prosek()
            naj = arr[i]
        }
    } return naj
}
let najmanjaOcenaNajboljeg = arr => {
    let najboljiFilm = najFilm(arr);
    let ocenenajboljegfilma = najboljiFilm.ocene // vraca niz ocena najboljeg filma
    let najslabijaOcena = ocenenajboljegfilma[0]

    ocenenajboljegfilma.forEach(f => {
        if (f < najslabijaOcena) {
            najslabijaOcena = f;
        }
    });
    console.log(najslabijaOcena)
}
najmanjaOcenaNajboljeg(filmovi)


//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.



let najmanjaOcena = arr => {
    let minOcena = arr[0].najmanjaOcena();
    for (let i = 0; i < arr.length; i++) {
        if (minOcena > arr[i].najmanjaOcena()) {
            minOcena = arr[i].najmanjaOcena()
        }
    }
    return minOcena
}

console.log(najmanjaOcena(filmovi))


//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

let f1 = [5, 5, 5, 5]
let f2 = [9, 5, 7, 9, 6]
let f3 = [9, 7, 7, 5]
let f4 = [9, 3, 8, 5]

//pravimo niz od svih ocena
let f = [];
f = f.concat(f1, f2, f, f3, f4) //nadovezovanje nizova, moze i pojedinacno f.concat(f1) pa f = f.concat(f2)
console.log(f)// tip je objekat


let sveOcene = arr => {
    let arrSveocene = [];
    arr.forEach(f => {
        arrSveocene = arrSveocene.concat(f.ocene);
    });
    return arrSveocene
}

console.log(sveOcene(filmovi))


// ovde prosledjujemo arrSveOcene

let najcescaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; // Sigurno se jednom pojavio
    for (let i = 0; i < arr.length; i++) {
        let tekuci = arr[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;
        for (let j = 0; j < arr.length; j++) {
            if (tekuci == arr[j]) {
                // naišli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }
        if (pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
}
let sve = sveOcene(filmovi); // niz svih ocena
console.log(najcescaOcena(sve));


//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadocene = (o, arr) => {
    let nizFilmova = [];
    arr.forEach(f => {
        if (f.prosek() > o) {
            // console.log(f)
            nizFilmova.push(f)
        }
    });
    return nizFilmova
};
console.log(iznadocene(5, filmovi))


//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let godinaIzdanja = arr => {
    let najnoviji = arr[0].godinaIzdanja;
    let naj = arr[0]
    for (let i =0; i<arr.length; i++){
        if (najnoviji < arr[i].godinaIzdanja){
            najnoviji = arr[i].godinaIzdanja;
            naj = arr[i];
        }
    }
    return naj

}

let iznadOceneNoviji = (o, arr) => {

}