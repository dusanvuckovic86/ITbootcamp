


let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

// function getItem(resourse, resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function () {
//         if (this.readyState === 4 && this.status === 200) {
//             //sve ok

//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }
//         else if (this.readyState === 4) {
//             //desila se greska
//             reject("could not fetch data")
//         }
//     });
//     request.open('GET', resourse);
//     request.send();
// }






// function submitForm1(event) {
//     event.preventDefault();

//     let capacity = inputOrder.value;
//     let ids = [];

//     getItem("./json/stock.json", (data) => {
//         data.forEach(item => {
//             if (item.stock <= 0) {
//                 ids.push(item.id);
//             }

//         });
//         getItem("./json/weights.json", (data) => {
//             let totalWeight = 0;
//             data.forEach(item => {
//                 if (ids.includes(item.id)) {
//                     totalWeight += item.weight
//                 }
//             });
//             console.log(`Ukupna tezimna proizvoda koji treba da se naruce je:${totalWeight}`)
//             if (totalWeight > capacity) {
//                 let par = document.createElement('p');
//                 par.innerHTML = 'Ukupna tezina proizvoda je veca od kapaciteta kamiona'
//                 par.style.color = 'red';
//                 par.style.fontWeight = 'bold';
//                 par.style.fontSize = '25px'
//                 divOrder.appendChild(par);
//             }
//             else {
//                 getItem("./json/prices.json", (data) => {
//                     let totalPrice = 0;
//                     data.forEach(item => {
//                         if (ids.includes(item.id)) {
//                             totalPrice += item.price;
//                         }
//                     });
//                     let par = document.createElement('p');
//                     par.innerHTML = `Ukupna tcena porudzbine je: ${totalPrice}`
//                     par.style.color = 'green';
//                     par.style.fontWeight = 'bold';
//                     par.style.fontSize = '25px'
//                     divOrder.appendChild(par);
//                 }, (msg) => { console.log(msg) });
//             }
//         }, (msg) => { console.log(msg) });
//     }, (msg) => { console.log(msg) });



// }

// formOrder.addEventListener('submit', submitForm1);














///////////////////////////////////////////////////////////////////

function getItemReturnpromise(resourse) {

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status === 200) {
                //sve ok

                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                //desila se greska
                reject("could not fetch data")
            }
        });
        request.open('GET', resourse);
        request.send();
    })

};



function submitForm2(event) {
    event.preventDefault();

    let capacity = inputOrder.value;
    let ids = [];

    getItemReturnpromise('./json/stock.json')
        .then((data) => {
            data.forEach(item => {
                if (item.stock <= 0) {
                    ids.push(item.id)
                }
            });
            return getItemReturnpromise('./json/weights.json');
        })
        .then((data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            if (totalWeight > capacity) {
                let par = document.createElement('p');
                par.innerHTML = 'Ukupna tezina proizvoda je veca od kapaciteta kamiona'
                par.style.color = 'red';
                par.style.fontWeight = 'bold';
                par.style.fontSize = '25px'
                divOrder.appendChild(par);
            }
            else {
                return getItemReturnpromise('./json/prices.json')
            }
        })
        .then((data) => {
            if (data !== undefined) {
                let totalPrice = 0;
                data.forEach(item => {
                    if (ids.includes(item.id)) {
                        totalPrice += item.price;
                    }
                });

                let par = document.createElement('p');
                let tabela = '<table border="1">'
               data.forEach(item => {
                    tabela += `<tr> 
                    <td>${item.item}</td>
                    <td>${item.price}</td>
                    </tr>`
                })
                tabela += `<tr> 
                <td>Ukupno</td>
                <td>${totalPrice}</td>
                </tr>`
                tabela += '</table>'
                par.innerHTML = tabela;

                // par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice}`
                // par.style.color = 'green';
                // par.style.fontWeight = 'bold';
                // par.style.fontSize = '25px'
                divOrder.appendChild(par);
            }
        }
        )
        .catch((msg) => {
            console.log(msg)
        })
}
formOrder.addEventListener('submit', submitForm2);




let imeProizvoda = document.querySelector('#imeProizvoda');
let inputCena1 = document.querySelector('#cena1');
let inputCena2 = document.querySelector('#cena2');
let potvrdiProveru = document.querySelector('#zadatakDrugi form');
let zadatakDrugi = document.querySelector('#zadatakDrugi')

let dugmePotvrdi = document.querySelector('#dugmePotvrdi')


function zadatak2(resourse) {

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status === 200) {

                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("could not fetch data")
            }
        });
        request.open('GET', resourse);
        request.send();
    })

};


function zadatak2Racunanje(event) {
    event.preventDefault();


    let imeValue = imeProizvoda.value;
    let cena1Value = inputCena1.value;
    let cena2Value = inputCena2.value;
    let nizNaStanju = [];
    zadatak2('./json/stock.json')
        .then((data) => {
            data.forEach(item => {
                if (item.stock > 0) {
                    nizNaStanju.push(item.item)
                }
            })
            return zadatak2('./json/prices.json')
        })
        .then((data) => {
            data.forEach(item => {
                if (nizNaStanju.includes(item.item) && item.item.includes(imeValue) && item.price >= cena1Value && item.price <= cena2Value) {
                    let lista = document.createElement('ul')
                    let li = document.createElement('li')
                    li.innerHTML += `${item.item} - ${item.price}`
                    lista.appendChild(li)
                    zadatakDrugi.appendChild(lista)
                }
            })

        })

}
dugmePotvrdi.addEventListener('click', zadatak2Racunanje)