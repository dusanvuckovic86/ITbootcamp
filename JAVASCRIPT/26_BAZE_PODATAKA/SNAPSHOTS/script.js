
let ul = document.querySelector('ul');
let form = document.querySelector('form')



// dobro je ali ne prikazuje u pravom vremenu
/*
db.collection('tasks')
    .orderBy('startDate', 'desc')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                let li = document.createElement('li');
                li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}]`
                ul.appendChild(li)
                if (obj.priority === true) {
                    li.style.color = "red";
                }

            });
        }
    })
    .catch(err => {
        console.log(`Greska ${err}`)
    });
*/


// ZA PRIKAZ U PRAVOM VREMENU DA NEBI KIKTALI REFRESH

db.collection('tasks')
    .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        // console.log(changes);
        changes.forEach(change => {
            let type = change.type;
            let doc = change.doc;
            let id = doc.id;
            if (type == "added") {
                let obj = doc.data();
                let li = document.createElement('li');
                li.id = id;
                li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}]`
                ul.appendChild(li)
                if (obj.priority === true) {
                    li.style.color = "red";
                }
                let button = document.createElement('button');
                button.innerHTML = 'Delete task';
                li.appendChild(button);
            }
            else if (type == "removed") {
                let li = document.getElementById(id);
                li.remove();
            }
        })
    });

ul.addEventListener('click', function (event) {
    // console.log(event.target.tagName)




    if (event.target.tagName === 'BUTTON') {
        let ok = confirm('Da li zelite da obrisete zadatak')
        if (ok == true) {
            let li = event.target.parentElement;
            let id = li.id;
            db.collection('tasks')
                .doc(id)
                .delete()
                .then(() => {
                    alert("Uspesno obrisan zadatak")
                })
                .catch(err => {
                    console.log(`Greska prilikom brisanja ${err}`)
                })
        }

    }
});


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let title = this.title.value;
    let startDate = this.startDate.value;
    let dueDate = this.dueDate.value;
    let priority = this.priority.checked;
    let description = this.description.value;
    // console.log(title + " " + startDate + " " + dueDate + " " + priority + " " + description)

    let startDateObj = new Date(startDate);
    let dueDateObj = new Date(dueDate);
    let startDateTS = firebase.firestore.Timestamp.fromDate(startDateObj);
    let dueDateTS = firebase.firestore.Timestamp.fromDate(dueDateObj);

    let obj = {
        title: title,
        startDate: startDateTS,
        dueDate: dueDateTS,
        priority: priority,
        description: description
    };

    db.collection('tasks')
        .add(obj) //da se osigura kreiranje dokumenta u bazi podataka sa razlicitim id ne .doc()
        .then(() => {
            console.log(`Uspesno dodat zadatak`)
        })
        .catch(err => {
            console.log(`Greska ${err}`)
        })


});