
//Čitanje dokumenata iz kolekcije

//1. pristupanje konkretnom dokumentu u kolekciji
//2. pristupanje svim dokumentima ili odredjenim dokumentima


///////////////////////////////////////////

//1. Nacina

db.collection('customers')
    .doc('newCustomer1')
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log(`Postoji dokument ${doc.id}`);
            let obj = doc.data();
            console.log(obj)
        }
        else {
            console.log(`Ne postoji dokument ciji je id: ${doc.id}`)
        }
        //Polja: doc.id(string), doc.exists(boolean)
        //Metoda: doc.data()
    })
    .catch((err) => {
        console.log(`Nemoguce dohvatiti dokument: ${err}`)
    })


//2. Nacin

db.collection('customers')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                console.log(doc.id, doc.data())
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    })

//////////////////////////////////

//1. dohvatanje dokumenata u odredjenom redosledu
//2. Dohvatanje odredjenog broja dokumenata
//3. dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume


//1.dohvatanje dokumenata u odredjenom redosledu
db.collection('customers')
    // .orderBy("ime") 
    // metoda za redosled, u zagradama se pise po cemu redosled
    .orderBy("name", "desc") //desc dodajemo za opadajuci redosled, asc ja ratuci redosled ali ako se ne upise drugi parametar ide rastuci
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
                // console.log(obj.ime + " " + obj.godine + " " + obj.plata)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    })



// Vise sortiranja dodali smo jos jedan orderBy ali izbacuje gresku u catch grani, ako imamo vise dokumenata sa istim vrednostima u poljima, kreiramo indeks po kome hocemo da se sortira i to radimo u firebase-u

db.collection('customers')
    .orderBy("age", "desc")
    .orderBy("name")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)

            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    })




///////////////////////////////////////////////
//2.Dohvatanje odredjenog broja dokumenata

db.collection('customers')
    .orderBy("name")
    .orderBy("age", "desc")
    .orderBy("salary", "desc")
    .limit(3) // metoda za koliko dokumenata da se prikaze
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)

            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    })



/////////////////////////////////////////////////

//3. dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume

// db.collection('customers')
//     .where('age', '>=', 22) // polje za kriterijum za uslov koji treba da se ispuni
//     .where('salary', '==', 55000)
//     // .orderBy('age', 'desc')
//     // .orderBy('name')
//     .get()
//     .then(snapshot => {
//         if (!snapshot.empty) {
//             let allDocs = snapshot.docs;
//             allDocs.forEach(doc => {
//                 let obj = doc.data();
//                 console.log(obj.name + " " + obj.age + " " + obj.salary)

//             });
//         }
//         else {
//             console.log(`Nema dokumenata u kolekciji`)
//         }
//     })
//     .catch(err => {
//         console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
//     })






///Vezbanje
// pročitati sve klijente koji:
// Imaju adresu u Nišu


db.collection('customers')
    .where('addresses', 'array-contains', 'Niš')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });



//Imaju platu veću ili jednaku od 500

db.collection('customers')
    .where('salary', '>=', 60000)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });


//Imaju platu između 300 i 800

db.collection('customers')
    .where('salary', '>=', 36000)
    .where('salary', '<=', 96000)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });


// Imaju platu manju od 900, i imaju 30 godina  

db.collection('customers')
    .where('salary', '<=', 108000)
    .where('age', '==', 30)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });



//Imaju adresu u Nišu ili Beogradu,

db.collection('customers')
    .where('addresses', 'array-contains-any', ['Niš', 'Beograd'])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });


//Imaju 22, 25 ili 28 godina.

db.collection('customers')
    // .where('age', '==', 22 || 25 || 28)
    .where('age', 'in', [22, 25, 28])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });




//Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

db.collection('tasks')
    .orderBy("title")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {

                console.log(doc.title)

            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    })



//Iz kolekcije tasks, pročitati sve zadatke, i koji su prioritetni


db.collection('tasks')
    .where('priority', '==', true)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj)
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`)
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`)
    });


    //Treba da se izvrše u tekućoj godini