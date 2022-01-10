let sportista1 = {
    imePrezime: "petar peric",
    visina: 2.15,
    timovi: ["zvezda", "partizan", "vojvodina", "CSKA"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            brojac++;
        }
        return brojac
    }

}
let sportista2 = {
    imePrezime: "joivan jovic",
    visina: 2.20,
    timovi: ["partizan", "vojvodina", "CSKA"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            brojac++;
        }
        return brojac
    }
}


let sportista3 = {
    imePrezime: "ivan ilic",
    visina: 2.3,
    timovi: ["zvezda", "vojvodina", "CSKA"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            brojac++;
        }
        return brojac
    }
}
let sportista4 = {
    imePrezime: "marko maric",
    visina: 1.85,
    timovi: ["CSKA", "vojvodina"],
    ukupnoTimova: function () {
        let brojac = 0;
        for (let i = 0; i < this.timovi.length; i++) {
            brojac++;
        }
        return brojac
    }
}

let nizSportista = [sportista1, sportista2, sportista3, sportista4];

//1. zadatak

let prosecnaVisina = arr => {

    let suma = 0;
    arr.forEach(element => {
        suma += element.visina;

    });
    return suma / arr.length;
}

console.log(`Prosecna visina tima je ${prosecnaVisina(nizSportista)}`);


//2. zadatak

let igraliZaTim = (arr, tim) => {
    let brojac = 0;

    arr.forEach(element => {
        element.timovi.forEach(igrac => {
            if (tim == igrac) {
                brojac++;
            }
        })
    })
    return brojac


}

console.log(`u timu su igrali ${igraliZaTim(nizSportista, "zvezda")} puta`)

//3. zadatak


let minTimova = arr => {
    let min = arr[0].ukupnoTimova();
    arr.forEach(element => {
        if (min > element.ukupnoTimova()) {

            min = element.ukupnoTimova()
        }

    })
    return min

}

let najmanjeTransfera = arr => {
    let niz = [];
    arr.forEach(element => {
        if (minTimova(arr) == element.ukupnoTimova()) {
            niz.push(element);
        }

    });
    console.log(`Najmanje timova promenio je ${niz[0].imePrezime}`)



}

najmanjeTransfera(nizSportista)

//4. zadatak
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





//5.zadatak

let trenerVidi = arr => {
    let brojac = 0;
    let visinaNultog = arr[0].visina;
    arr.forEach( element => {
        if(visinaNultog < element.visina){
            brojac++;
            visinaNultog = element.visina;
        }
    })
    return brojac
}

console.log(`trener vidi ukupno ${trenerVidi(nizSportista)} igraca`)