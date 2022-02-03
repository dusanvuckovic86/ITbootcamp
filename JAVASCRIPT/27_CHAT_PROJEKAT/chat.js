class Chatroom {
    constructor(u, r) {
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

        let userNameVal = u;
        let userNameValue = userNameVal.trim();

        if ((userNameValue != "" || userNameValue != null) && userNameValue.length >= 2 && userNameValue.length <= 10) {
            this._username = u;
            console.log('Ispravno korisnicko ime')
        }
        else {
            alert('Username must include more than two and less then ten letters or numbers')
        };

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
        this.chats
            .where('room', '==', this.room)
            .orderBy('created_at', 'asc')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    // //kada se desila promena u bazi                     
                    //ispisati dokumente
                    if (change.type == "added") {
                        callback(change.doc.data())
                    }
                });
            })
    }
    //     validateUserName(vrednost){
    //     if(vrednost.length >= 2 && vrednost.length <=10){

    //     }
    // }
    updateUsername(username) {

        this.username = username;

    }

}


export default Chatroom;