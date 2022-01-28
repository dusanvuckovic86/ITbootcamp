let film1 = {
    name: "Avatar",
    director: {
        name: "James",
        surname: "Cameron"
    },
    relese_year: 2009,
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 7.0

}

let film2 = {
    name: "Taxi",
    director: {
        name: "Gerard",
        surname: "Pires"
    },
    relese_year: 1998,
    genres: ["Action", "Comedy", "Crime"],
    rating: 7.0
}

let film3 = {
    name: "Necista Krv",
    director: {
        name: "Milan",
        surname: "Petrovic"
    },
    relese_year: 2021,
    genres: ["Drama", "History"],
    rating: 6.9
}

let filmovi = [film1, film2, film3];

console.log(filmovi)


//Dodaje nekoliko filmova u bazu

let dodajFilmove = array => {
    for (let i = 0; i < array.length; i++) {
        db.collection('movies')
            .doc(`film${i}`)
            .set(array[i])
            .then(() => {
                console.log(`Uspesno dodat film`)
            })
            .catch((msg) => {
                console.log(`Film nije dodat ${msg}`)
            })
    };

}
dodajFilmove(filmovi)


//Menja podatke o nekim filmovima u bazi

let izmeniDocument = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].relese_year >= 2000) {
            db.collection("movies")
                .doc(`film${i}`)
                .update({
                    rating: array[i].rating + 1
                })
        }
    }

}

izmeniDocument(filmovi)


//Dodaje žanr nekom filmu

let dodajZanr = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].genres.length < 4) {
            db.collection("movies")
                .doc(`film${i}`)
                .update({
                    genres: firebase.firestore.FieldValue.arrayUnion('Fantasy')
                })
        }
    }
}
dodajZanr(filmovi)


//Briše žanr nekom filmu

let brisiZanr = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].genres.length >= 2) {
            db.collection("movies")
                .doc(`film${i}`)
                .update({
                    genres: firebase.firestore.FieldValue.arrayRemove('Drama')
                })
        }
    }
}

brisiZanr(filmovi)


//Menja ime ili prezime nekom režiseru

let promeniPrezime = array => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].relese_year < 2000) {
            db.collection("movies")
                .doc(`film${i}`)
                .update({
                    'director.surname': 'Mikkelsen'
                })
        }
    }
}
promeniPrezime(filmovi)