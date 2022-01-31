class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
    }

    set room(r) {
        this._room = r;
    }
    get room() {
        return this._room;
    }

    set username(u) {
        this._username = u;
    }
    get username() {
        return this._username;
    }


    // Dodavanje nove poruke
    async addChat(message) {

        let vreme = new Date();

        let docChat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(vreme)
        };

        let response = await this.chats.add(docChat);
        return response;

    }

    getChats(callback) {
        this.chats.onSnapshot
    }
}


let chat3 = new Chatroom('Milena', 'general')
chat3.addChat("Trenin cemo odrzati u sredu u 18h")
    .then(() => {
        console.log('Uspesno dodat chat')
    })
    .catch((err) => {
        console.log(err)
    })


chat3.getChats(() => {

});
export default Chatroom;