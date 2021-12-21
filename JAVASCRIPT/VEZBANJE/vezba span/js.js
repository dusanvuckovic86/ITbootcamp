let red = `<span>`;

for (red = 1; red<=8; red ++){
    if (red %2==0){
        let span = `<span>`;
        for (span = 1; span<=8; span++){
            if(span %2==0){
                document.body.innerHTML += `<span style='color:black; background-color: black; border: 1px solid black'>tekst</span>`
            }
            else {
                document.body.innerHTML += `<span style='color:white; background-color: white;border: 1px solid black'>tekst</span>`
            }
        }
        span += `</span>`;
        document.body.innerHTML +=`<br>`;
    }


    if (red %2!=0){
        let span = `<span>`;
        for (span = 1; span<=8; span++){
            if(span %2==0){
                document.body.innerHTML += `<span style='color:white; background-color: white;border: 1px solid black'>tekst</span>`
            }
            else {
                document.body.innerHTML += `<span style='color:black; background-color: black;border: 1px solid black'>tekst</span>`
            }
        }
        span += `</span>`;
        document.body.innerHTML += `<br>`;
    }
}
red += `</span>`;


//lista
let li;
let lista = `<ul>`;

for (li=1; li<= 12; li++ ){
    if (li%4==0){
        document.body.innerHTML += 
        `<ul>
        <li>tekst</li>
        </ul>`
    }
    else{
        document.body.innerHTML += 
        `<li>tekst</li>`
    }
}
lista += `</ul>`;
document.body.innerHTML += lista;


// ako broj nije ceo

let broj = 20.35;
console.log(broj%1);

if (broj%1==0){
    document.body.innerHTML += `Broj ${broj} je ceo`;
}
else {
    document.body.innerHTML += `Broj ${broj} nije ceo`;
}


//// tabela 3*8

let redTabela;

let tabela =`<table>`;

for (redTabela =1; redTabela<= 8; redTabela++){

    if (redTabela%2==0){
        tabela += `
        <tr style='background-color: red'>
        <td>tekst</td>
        <td>tekst</td>
        <td>tekst</td>
        </tr>`
    }
    else{
        tabela +=
        `<tr style='background-color: blue'>
        <td>tekst</td>
        <td>tekst</td>
        <td>tekst</td>
        </tr>`
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;
