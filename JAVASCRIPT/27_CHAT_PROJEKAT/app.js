import Chatroom from "./chat.js";
import ChatUI from "./ui.js"





//DOM
let divChat = document.getElementById('element');
let unosPoruke = document.getElementById('unosPoruke');
let btnUnosPoruke = document.getElementById('btnUnosPoruke');
let userName = document.getElementById('userName');
let btnUserName = document.getElementById('btnUserName');
let ispisUserName = document.getElementById('ispisUserName');
let navigacija = document.getElementById('navigacija');


//Objekti klasa

let setUsername = 'Anonimus';
let chatroom = new Chatroom(setUsername, 'general');
let chatUI = new ChatUI(divChat);


//demonstracija local storage-a - postavljanje vrednosti
localStorage.setItem("nazivPromenljive", 5);
localStorage.setItem("xnazivPromenljive", "Test string");
localStorage.setItem("x", 7);
localStorage.setItem("y", 10);

//uzimanje vrednosti iz local strorage-a
let z = localStorage.x + localStorage.y;
console.log(z)



//ispis dokumenata iz db u konzoli
chatroom.getChats(d => {
    console.log(d);
})


console.log(chatUI)



//ispis poruka na stranici

// chatroom.getChats(d => {
//     chatUI.templateP(d)
// })

//dodavanje poruke u bazu i na staranicu


btnUnosPoruke.addEventListener('click', x => {
    x.preventDefault();

    let unosPorukeValue = unosPoruke.value;
    let unosPorukeValueTrim = unosPorukeValue.trim()

    console.log(unosPorukeValueTrim)

    if (unosPorukeValueTrim == "" || unosPorukeValueTrim == null) {
        alert('You did not enter message')
        unosPoruke.value = "";
    }
    else {
        chatroom.addChat(unosPorukeValueTrim)
            .then(() => {
                unosPoruke.value = "";
            })
            .catch((err) => {
                console.log(err)
            })

    };


});


// ispis obavestenja o promeni username




btnUserName.addEventListener('click', c => {
    c.preventDefault()

    let userNameVal = userName.value;
    let userNameValue = userNameVal.trim()
    localStorage.setItem("usernameInput", userNameValue);
    if (localStorage.usernameInput) {
        userNameValue = localStorage.usernameInput
    }


    if (userNameValue.length >= 2 && userNameValue.length <= 10 && (userNameValue != "" || userNameValue != null)) {
        chatroom.updateUsername(userNameValue);

        let ispis = document.createElement('p');
        ispis.id = 'ispis'
        ispis.innerHTML = `Korisnicko ime je promenjeno: ${userNameValue}`;
        ispisUserName.appendChild(ispis)
        userName.value = "";
    }
    else {
        chatroom.updateUsername(userNameValue);

        let ispis = document.createElement('p');
        ispis.id = 'ispis2'
        ispis.innerHTML = `Korisnicko ime nije pravilno uneto`;
        ispisUserName.appendChild(ispis)
        userName.value = "";
    }

})

//Navigacija

navigacija.addEventListener('click', e => {
    if (e.target.tagName === "A") {
        chatUI.clear();
        chatroom.room = e.target.id;
        chatroom.getChats(d => {
            chatUI.templateP(d)
        })
    }
})