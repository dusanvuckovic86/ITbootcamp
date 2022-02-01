import Chatroom from "./chat.js";
import ChatUI from "./ui.js"

let chat1 = new Chatroom('pPeric', 'general')


console.log(chat1.username)

// chat1.addChat("Nova poruka")
//     .then(() => {
//         console.log('Uspesno dodat chat')
//     })
//     .catch((err) => {
//         console.log(err)
//     })


chat1.getChats(d => {
    console.log(d);
})


let chat3 = new Chatroom('Milena', 'general')
// chat3.addChat("Trenin cemo odrzati u sredu u 18h")
//     .then(() => {
//         console.log('Uspesno dodat chat')
//     })
//     .catch((err) => {
//         console.log(err)
//     })


chat3.getChats(d => {
    console.log(d);
});



let divChat = document.getElementById('element');
let chatUI1 = new ChatUI(divChat);
console.log(chatUI1)



//ispis poruka na stranici

chat3.getChats(d => {
    chatUI1.templateP(d)
})

