//Koje je režirao George Lucas,



db.collection('movies')
    .where('director.name', '==', 'George')
    .where('director.surname', '==', 'Lucas')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {

            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });




//Čija je ocena između 5 i 10

db.collection('movies')
    .where('rating', '>=', 5)
    .where('rating', '<=', 10)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {

            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });


//Kojima je žanr komedija, tragedija ili drama

db.collection('movies')
    .where('genres', 'array-contains-any', ['Comedy', 'Action', 'Crime'])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {

            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });


//Koji su izašli u 21. veku.

db.collection('movies')
    .where('relese_year', '>=', 2000)
    .where('relese_year', '<', 2100)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {

            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });

//Prikazati sve informacije o najbolje rangiranom filmu.

db.collection('movies')
    .orderBy('rating', 'desc')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {

            snapshot.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });



    //Prikazati sve informacije o najslabije rangiranoj drami.