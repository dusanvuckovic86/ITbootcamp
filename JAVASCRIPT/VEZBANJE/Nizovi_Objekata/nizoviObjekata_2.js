let polaznik1 = {
    ime: "Petar",
    prezime: "Peric",
    ocena: 85,
}
let polaznik2 = {
    ime: "Anita",
    prezime: "Antic",
    ocena:90,
}
let polaznik3 = {
    ime: "Jovan",
    prezime: "Jovic",
    ocena: 70,
}
let polaznik4 = {
    ime: "Milan",
    prezime: "Milic",
    ocena: 85,
}
let polaznik5= {
    ime: "Marija",
    prezime: "Maric",
    ocena:70,
}
let polaznik6= {
    ime: "Ivan",
    prezime: "Ivic",
    ocena: 70,
}
let polaznik7= {
    ime: "Ivana",
    prezime: "Ivic",
    ocena: 90,
}
let polaznik8= {
    ime: "Marko",
    prezime: "Maric",
    ocena:90,
}


let kurs1 = {
    naziv:"Razvoj veb stranica: JS",
    grad:"Beograd",
    polazniciNiz: [polaznik1, polaznik2, polaznik3, polaznik4],

    brojPolaznika: function(){
        let brojac = 0;
       for (let i =0; i<this.polazniciNiz.length; i++){
           brojac++
       };
       return brojac
    },

    prosecnaOcena: function(){        
        let sum = 0;

        this.polazniciNiz.forEach(b => {

            sum += b.ocena;
        });
        return sum/this.polazniciNiz.length;
    
    },
    iznad65: function(){
        let brojac =0;
        
            this.polazniciNiz.forEach(element => {
                if (element.ocena > 65){
                    brojac++
                }
            })
        return brojac
    }
}

console.log(kurs1.prosecnaOcena())


let kurs2 = {
    naziv:"Razvoj veb stranica: JS",
    grad:"Nis",
    polazniciNiz: [ polaznik5, polaznik6],
    brojPolaznika: function(){
        let brojac = 0;
       for (let i =0; i<this.polazniciNiz.length; i++){
           brojac++
       };
       return brojac
    },

    prosecnaOcena: function(){        
        let sum = 0;

        this.polazniciNiz.forEach(b => {

            sum += b.ocena;
        });
        return sum/this.polazniciNiz.length;
    
    },
    iznad65: function(){
        let brojac =0;
        
            this.polazniciNiz.forEach(element => {
                if (element.ocena > 65){
                    brojac++
                }
            })
        return brojac
    }
}
let kurs3 = {
    naziv:"Osnove programiranja: Java",
    grad:"Nis",
    polazniciNiz: [polaznik2, polaznik8],
    brojPolaznika: function(){
        let brojac = 0;
       for (let i =0; i<this.polazniciNiz.length; i++){
           brojac++
       };
       return brojac
    },

    prosecnaOcena: function(){        
        let sum = 0;

        this.polazniciNiz.forEach(b => {

            sum += b.ocena;
        });
        return sum/this.polazniciNiz.length;
    
    },
    iznad65: function(){
        let brojac =0;
        
            this.polazniciNiz.forEach(element => {
                if (element.ocena > 65){
                    brojac++
                }
            })
        return brojac
    }
}

console.log(kurs3.iznad65())


let kursNiz = [kurs1, kurs2,kurs3];


/////////////////////////////////////

//1.Funkciji se prosleđuje niz kurseva i string koji predstavlja grad, a vraća broj kurseva koji se održavaju u tom gradu.

let brojKurseva = (array, grad) => {
    let brojac =0;
array.forEach(element => {
    
    if (grad == element.grad){
        brojac++;
        
    }    
});
return brojac
        
}

let kurseviUGradu = brojKurseva(kursNiz, "Beograd")
console.log(kurseviUGradu)

//2.Funkciji se prosleđuje niz kurseva i string koji predstavlja naziv, a vraća broj kurseva koji sadrže dati naziv.

let istiNaziv = (array, naziv) => {
    let brojac =0;
    array.forEach(element => {
        if (naziv == element.naziv){
            brojac ++;
        }
    })
    return brojac
}
let kursevIstiNaziv = istiNaziv(kursNiz, "Razvoj veb stranica: JS")
console.log(kursevIstiNaziv)

//3 Funkciji se prosleđuje niz kurseva, a ona ispisuje naziv kursa i grad u kojem se nalazi maksimalan broj polaznika. Ukoliko postoji više takvih kurseva, ispisati bilo koji takav kurs.

let maks = arr => {
    let max = 0;
    arr.forEach(element => {
        if (max < element.brojPolaznika()){
            max = element.brojPolaznika()
        }
    })
    return max
}

let najvisePolaznika = arr => {
    let niz = [];
    arr.forEach(element => {
        if (maks(arr) == element.brojPolaznika()) {
            niz.push(element)
        }
    });
    console.log(`Maksimalan broj polaznika ${maks(arr)} je u ${niz[0].grad}`)
}

najvisePolaznika(kursNiz)

//4. Funkciji se prosleđuje niz kurseva i string koji predstavlja prezime, a ispisuje sve polaznike (ime i prezime polaznika, kao i naziv kursa i grad gde pohađaju kurs) čije ime sadrži dati parametar.

let imePrezimeGradKurs = (arr,prezime) => {

    arr.forEach(element => {
        element.polazniciNiz.forEach( polaznik => 
            {
                if(prezime == polaznik.prezime){
                    console.log(`${polaznik.ime} ${polaznik.prezime} ${element.grad} ${element.naziv}`)
                }
            })
        
        
    });
}

imePrezimeGradKurs(kursNiz,"Antic")


//5. Funkciji se prosleđuje niz kurseva, a ispisuje naziv kursa i grad gde je ostvarena najbolja prosečna ocena na završnom testu. Ukoliko ima više takvih kurseva, ispisati bilo koji.



let maksOcena = arr => {
    let max = arr[0].prosecnaOcena();
    arr.forEach(element => {
        if (max < element.prosecnaOcena()){
            max = element.prosecnaOcena()
        }
    })
    return max
}

let najboljiProsek = arr => {
    let niz = [];
    arr.forEach(element => {
        if (maksOcena(arr) == element.prosecnaOcena()) {
            niz.push(element)
        }
    });
    console.log(`Najvisa prosecna ocena ${maksOcena(arr)} je u ${niz[0].grad}`)
}

najboljiProsek(kursNiz)

//6.Kurs je uspešan ako su svi polaznici položili završni test (svi polaznici ostvarili iznad 65%). Funkciji se prosleđuje niz kurseva, a vraća broj uspešnih kurseva.

let uspesanKurs = arr => {
    let brojac = 0;
    arr.forEach(element=> {
        if (element.iznad65() == element.polazniciNiz.length){
            brojac++
        }

    })
    return brojac

}

console.log(uspesanKurs(kursNiz))



