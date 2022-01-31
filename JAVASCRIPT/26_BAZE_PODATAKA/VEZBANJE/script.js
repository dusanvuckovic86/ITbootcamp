//db je objekat baze njega vucemo iz html fajla

console.log(db);


//pristupanje kolekciji
let customers = db.collection('customers');
console.log(customers);


//pristupanje dokumentu
let doc1 = customers.doc('newCustomer1');
console.log(doc1);

let doc2 = db.collection('tasks').doc('task1');
console.log(doc2);


// za pristup dokumentu
// let doc = db.collection('....').doc('...')
/* kod dokumenata imamo sledece operacije 
CRUD ( create, read, update, delete)
create: doc.set(...)
read: doc.get(....)
update: doc.update(....)
delite doc.delete(....)
sve ove cetiri operacije kao rezultat vracaju promise . Nakon njih lancamo .then() .catch()

*/

//dodavanje novog dokumenta


let obj = {
    name: "Marko",
    age: 22,
    addresses: ["Niš", "Leskovac"],
    salary: 62000.35
};

db.collection('customers').doc('newCustomer4').set(obj)
    .then(() => {
        console.log('Dodat novi dokument u kolekciju "customers"');
        return db.collection('customers').doc('newCustomer4').set({ height: 180 }, { merge: true })
    })
    .then(() => {
        console.log('Spojen dokument "newCustomer4"')
    })
    .catch((err) => {
        console.log('Greska prilikom dodavanja novog dokumenta: ' + err);
    });




let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00")

let obj2 = {
    title: "Fudbal",
    startDate: firebase.firestore.Timestamp.fromDate(datum1),
    dueDate: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz kampa"

}

db.collection('tasks')
    .doc('task4')
    .set(obj2)
    .then(() => {
        console.log("Uspesno dodat task")
    })
    .catch((msg) => {
        console.log(`Greska ${msg}`)
    })





//update

db.collection('tasks')
    .doc('task1')
    .update({
        priority: false
    })
    .then(() => {
        console.log("Uspesno promenjeno")
    })
    .catch(err => {
        console.log(`Greska: ${err}`)
    });



//delete

db.collection('customers')
    .doc('newCustomer2')
    .delete()
    .then(() => {
        console.log("Uspesno izbrisan dokument")
    })
    .catch(err => {
        console.log(`Greska ${err}`)
    });


console.log("Test poruka")



// Drugi nacin za dodavanje dokumenata

db.collection('tasks')
    .add({
        title: "Vezba za projekat",
        description: "Vezbanje JS",
        startDate: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
        dueDate: null,
        priority: true
    })
    .then(() => {
        console.log("Uspesno dodat zadatak u kolekciju tasks");
    })
    .catch(err => {
        console.log(`Desila se greska ${err}`);
    });