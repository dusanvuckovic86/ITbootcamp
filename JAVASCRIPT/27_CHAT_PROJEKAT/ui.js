



class ChatUI {
    constructor(div) {
        this.divElement = div
    }

    set divElement(div) {
        this._divElement = div

    }
    get divElement() {
        return this._divElement
    }

    formatiranjeVremena(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        return `${day}.${month}.${year}  ${hour}:${minutes}`
    }

    templateP(doc) {
        let d = doc.created_at.toDate();
        let paragraf = `<p>
        ${doc.username} : ${doc.message}
        <br>
        ${this.formatiranjeVremena(d)}
        </p>`

        this.divElement.innerHTML += paragraf;
    }



}

export default ChatUI