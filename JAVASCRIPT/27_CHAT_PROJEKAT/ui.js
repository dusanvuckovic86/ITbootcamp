



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
        let datumPC = new Date();
        let datumKomp = datumPC.getDate();
        if (datumKomp == day) {
            return `${hour}:${minutes}`
        }
        else {
            return `${day}.${month}.${year}  ${hour}:${minutes}`
        }

    }

    templateP(doc) {
        let d = doc.created_at.toDate();

        let paragraf = document.createElement('p')
        paragraf.className = "ispisanaPoruka"
        paragraf.innerHTML += `${doc.username} : ${doc.message} <br> ${this.formatiranjeVremena(d)}`
        this.divElement.appendChild(paragraf)

    }

    clear() {
        this.divElement.innerHTML = "";
    }

}

export default ChatUI