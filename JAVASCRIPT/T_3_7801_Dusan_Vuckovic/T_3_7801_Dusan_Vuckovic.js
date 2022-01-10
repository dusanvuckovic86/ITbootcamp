console.log("Test");

// //Napraviti objekat sportista koji od polja ima:
// ○ imePrezime (string - ime i prezime sportiste)
// ○ visina (decimalni broj koji predstavlja visinu sportiste u metrima)
// ○ timovi (niz stringova - različiti timovi u kojima je sve ovaj sportista igrao)

let sportista1 = {
    imePrezime: "Petar Peric",
    visina: 2.10,
    tim: ["Zvezda", "Partizan"],

    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.tim.length; i++) {
            brojac++
        }
        return brojac;
    }
}

console.log(sportista1.ukupnoTimova())


let sportista2 = {
    imePrezime: "Marko Maric",
    visina: 2.05,
    tim: ["Vojvodina", "Partizan", "CSKA"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.tim.length; i++) {
            brojac++
        }
        return brojac;
    }
}
let sportista3 = {
    imePrezime: "Ivan Ivic",
    visina: 1.95,
    tim: ["Vojvodina", "CSKA"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.tim.length; i++) {
            brojac++
        }
        return brojac;
    }
}

let sportista4 = {
    imePrezime: "Jovan Jovic",
    visina: 2.15,
    tim: ["CSKA"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.tim.length; i++) {
            brojac++
        }
        return brojac;
    }
}

let nizSportista = [sportista1, sportista2, sportista3, sportista4]



//////////////////////////////////
//prvi zadatak
// Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
// prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.


let prosecnaVisina = arr => {
    suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i].visina
    }
    return suma / arr.length
};

console.log(prosecnaVisina(nizSportista));


////////////////////////////
//drugi zadatak

// Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
// prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
// sportisti igrali i vraća taj broj. Pozvati funkciju i rezultat ispisati u konzoli.

let igraliZaTim = (arr, tim) => {
    let brojac = 0;
    arr.forEach(element => {
        element.tim.forEach(tm => {
            if (tim == tm) {
                brojac++
            }
        })

    });
    return brojac
};



console.log(igraliZaTim(nizSportista, "Zvezda"))

/////////////////////////////
//treci zadatak

// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
// vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
// puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji
// više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.
let minimalnoTransfera = arr => {
    let min = arr[0].ukupnoTimova();
    arr.forEach(element => {
        if (min > element.ukupnoTimova()) {
            min = element.ukupnoTimova()
        }
    })
    return min
}
console.log(minimalnoTransfera(nizSportista))

let najmanjeTimova = arr => {
    let niz = [];
    arr.forEach(element => {
        if (minimalnoTransfera(arr) == element.ukupnoTimova()) {
            niz.push(element)
        }
    });
    console.log(`Najmanje timova promenio je ${niz[0].imePrezime}`)
}


najmanjeTimova(nizSportista)


//cetvrti zadatak

// Trener igrače na treningu deli u dva tima kako bi se što bolje pripremili za utakmicu.
// Kada trener dobije spisak sportista (niz sportista) on ih deli na sledeći način:
// ○ Ukoliko je na spisku paran broj igrača, trener u prvi tim stavlja prvu polovinu
// igrača sa spiska, dok drugi tim čine igrači sa druge polovine liste
// Ukoliko je na spisku neparan broj igrača, trener u prvi tim stavlja jednog
// igrača više nego u drugi tim.
// Napisati funkciju višiTimPodela, kojoj se prosleđuje niz sportista a funkcija ispisuje
// na ekranu tekst “Viši je prvi tim” ukoliko je prosečna visina igrača u prvom timu veća
// od prosečne visine igrača u drugom timu. U suprotnom funkcija na ekranu ispisuje
// “Viši je drugi tim”. Ako su te dve prosečne visine iste, funkcija ispisuje tekst “Oba
// tima su u proseku iste visine”. Pozvati funkciju.


let višiTimPodela = arr => { 
    let t1 = []; 
    let t2 = []; 
    if (arr.length % 2 == 0) { 
        for (let i = 0; i < arr.length; i++) { 
            if (i < arr.length / 2) { 
                t1.push(arr[i]); 
            } 

            else { 
                t2.push(arr[i]); 
            } 
        } 
    } 
    else { 
        for (let i = 0; i < arr.length; i++) { 
            if (i < (arr.length + 1) / 2) { 
                t1.push(arr[i]); 
            } 

            else { 
                t2.push(arr[i]); 
            } 
        } 
    } 
    let visinaT1 = 0; 
    let visinaT2 = 0; 
    t1.forEach(s => { 
        visinaT1 += s.visina; 
    }); 
    t2.forEach(s => { 
        visinaT2 += s.visina; 
    }); 
    if (visinaT1 / t1.length > visinaT2 / t2.length) { 
        console.log("Visi je prvi tim"); 
    } 
    else if (visinaT2 / t2.length > visinaT1 / t1.length) { 
        console.log("Visi je drugi tim"); 
    } 
    else { 
        console.log("Oba tima su u proseku iste visine"); 
    } 
};



//peti zadatak

// Napisati funkciju trenerVidi kojoj se prosleđuje niz sportista a funkcija vraća
// vrednost (ceo broj) koliko sportista trener vidi.
// Pretpostavimo da sportisti stoje u vrsti, kao na sledećoj slici, a da trener stoji pre
// prvog sportiste u vrsti(pre nultog elementa u nizu).
// Vaš zadatak je da prebrojite koliko sportista trener može da vidi sa svoje pozicije.





let trenerVidi = arr => {

    let visinaNultog = arr[0].visina;
    let brojac = 0;
    arr.forEach(element => {
        if (visinaNultog < element.visina) {
            brojac++;
            visinaNultog = element.visina;
        }
    })
    return brojac
}

console.log(trenerVidi(nizSportista))