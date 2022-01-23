let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     if (request.readyState == 1) {
//         console.log(`Uspostavljena konekcija`)
//     }
//     else if (request.readyState == 2) {
//         console.log(`Poslat je zahtev serveru`)
//     }
//     else if (request.readyState == 3) {
//         console.log(`Prihvata se odgovor u statusu preuzimanja`)
//     }
//     else if (request.readyState == 4) {
//         console.log(`Odgovor je preuzet`, request.responseText)
//     }

// });


/////////////////////////////////////////////////
//ANONIMNA FUNKCIJA

//SVUDA SE KORISTI THIS UMESTO REQUEST 

// request.addEventListener('readystatechange', function() {
//     if (this.readyState === 4 && this.status === 200) { // UVEK SE PISE OVAKO DA SE OSIGURA DA SE DOBIJU DOBRI PODACI SA SERVERA
//         console.log(this.responseText)
//     }
//     else if (this.readyState === 4) {
// console.log(`Could not fetch data`)
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/USERS/3');
// request.send();




//PISE SE SAMO U USLOVI STAVKA 4 JER TADA DOBIJAMO KOMPLETAN ODGOVOR, I === 200 DA POTVRDI DA NEMA GRESKE
// UVEK SE PISE OVAKO DA SE OSIGURA DA SE DOBIJU DOBRI PODACI SA SERVERA

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        console.log(data)
    }
    else if (request.readyState === 4) {
        console.log(`Could not fetch data`)
    }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
request.send();


//Ispisati u konzoli one korisnike čiji website ima domen „.com“.

let users = new XMLHttpRequest();

users.addEventListener('readystatechange', () => {
    if (users.readyState === 4 && users.status === 200) {
        let data = JSON.parse(users.responseText);

        for (let i = 0; i < data.length; i++) {
            if (data[i].website.includes(".com")) {
                console.log(data[i].name)

            }
        }
    }
    else if (users.readyState === 4) {
        console.log(`Could not fetch data`)
    }

})
users.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
users.send();



//Ispisati korisnike čije ime sadrži reč „Clementin“.

let imeClementin = new XMLHttpRequest();

imeClementin.addEventListener('readystatechange', () => {
    if (imeClementin.readyState === 4 && imeClementin.status === 200) {
        let data = JSON.parse(imeClementin.responseText);

        for (let i = 0; i < data.length; i++) {
            if (data[i].name.includes("Clementin")) {
                console.log(data[i].name)
            }

        }
    }
    else if (imeClementin.readyState === 4) {
        console.log(`Could not fetch data`)
    }
})
imeClementin.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
imeClementin.send();


//Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

let kompanije = new XMLHttpRequest();

kompanije.addEventListener('readystatechange', () => {
    if (kompanije.readyState === 4 && kompanije.status === 200) {
        let data = JSON.parse(kompanije.responseText);

        console.log(`Kompanije čije ime sadrži reč Group, ili reč LLC`)

        for (let i = 0; i < data.length; i++) {
            if (data[i].company.name.includes('Group') || data[i].company.name.includes('LLC')) {

                console.log(data[i].name)
            }
        }
    }
    else if (kompanije.readyState === 4) {
        console.log(`Could not fetch data`)
    }
})
kompanije.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
kompanije.send();


//Ispisati sve različite gradove u kojima rade ovi korisnici.

let gradovi = new XMLHttpRequest();

gradovi.addEventListener('readystatechange', () => {
    if (gradovi.readyState === 4 && gradovi.status === 200) {
        let data = JSON.parse(gradovi.responseText);

        console.log(`Razliciti gradovi`)
        let nizGradova = [];
        for (let i = 0; i < data.length; i++) {
            if (!nizGradova.includes(data[i].address.city)) {
                nizGradova.push(data[i].address.city)
            }
        }
        console.log(nizGradova)
    }
    else if (gradovi.readyState === 4) {
        console.log(`Could not fetch data`)
    }
})
gradovi.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
gradovi.send();


//Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

let geo = new XMLHttpRequest();

geo.addEventListener('readystatechange', () => {
    if (geo.readyState === 4 && geo.status === 200) {
        let data = JSON.parse(geo.responseText);

        console.log(`Geografske odlike`)
        let brojac = 0;
        data.forEach(element => {
            if (parseFloat(element.address.geo.lat) < 0 && parseFloat(element.address.geo.lng) < 0) {
                brojac++
            }

        });
        console.log(brojac)
    }
    else if (geo.readyState === 4) {
        console.log(`Could not fetch data`)
    }
})
geo.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
geo.send();







let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data)
        }
        else if (this.readyState === 4) {
            reject("Doslo je do greske")
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/USERS');
    request.send();
};

let zad2 = (niz) => {
    niz.forEach(korisnik => {
        if (korisnik.website.includes(".com")) {
            console.log(korisnik.name)
        }
    })
}

let zad3 = arr => {
    arr.forEach(korisnik => {
        if (korisnik.name.includes("Clementin")) {
            console.log(korisnik.name)
        }
    })
}

let zad5 = arr => {
    let nizGradova = [];
    arr.forEach(korisnik => {
        if (!nizGradova.includes(korisnik.address.city)) {
            nizGradova.push(korisnik.address.city)
        }
    });
    console.log(nizGradova)
}
let ispisPorukeStranica = (poruka) => {
    document.body.innerHTML += `<p class='error'>${poruka}</p>`
}

let ispisPorukeKonzola = (poruka) => {
    console.log(poruka)
}

getUsers(zad2, ispisPorukeStranica);
getUsers(zad3, ispisPorukeStranica);
getUsers(zad5, ispisPorukeStranica);






let sportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data)
        }
        else if (this.readyState === 4) {
            reject("Greska")
        }
    })
}
request.open('GET', './sportisti.json');
request.send();

//Ispisati prosečnu visinu svih sportista.

let prosecnaVisina = (arr) => {
    let suma =0;
    arr.forEach(sportista => {
        suma += sportista.visina
    })
}