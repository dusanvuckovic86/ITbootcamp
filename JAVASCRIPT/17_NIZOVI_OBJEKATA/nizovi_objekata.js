
let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 12
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 45,
    dislikes: 10
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let arrBlogs = [blog1, blog2, blog3];

arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog)
});

arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</>p`
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</>p`
});

for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}


//Promena vrednosti elementa

// blog3.title = "Napredni HTML tagovi";
// console.log(arrBlogs)
// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs)



//VEZBANJE

//Prvi zadatak

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vreca ukupan broj lajkova


let brojLajkova = arr => {
    let suma =0;
    arr.forEach(element => {
        suma += element.likes
    })
    return suma
}
console.log(`ukupan broj lajkova je ${brojLajkova(arrBlogs)}`)


//foeeach petlja
// let sum = 0;
// let sumaLikes = arr => {
//     arr.forEach(b => {
//         sum += b.likes;
//     });
//     return sum;
// }
// console.log(`Ukupan broj lajkova: ${sumaLikes(arrBlogs)}`);




//lajkovi iz prvog i treceg bloga 

let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;


//drugacije zapisano

// let sum13 = arrBlogs[0]["likes"] + arrBlogs[2]["likes"];




//drugi zadatak

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let sum2 =0;
let prosecnoLajkova = arr => {
    arr.forEach( element => {
        sum2 += element.likes;

    });
    return sum2/arr.length
}
console.log(prosecnoLajkova(arrBlogs))




//treci zadatak
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(elem=> {
        if(elem.likes > elem.dislikes){
            console.log(elem.title);
        }
        
    });
}
console.log(`Blogovi sa vise lajkova nego dislajkova`)
moreLikes(arrBlogs);




// cetvrti zadatak

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let naslovi = arr => {
arr.forEach(element =>{
    if(element.likes > element.dislikes * 2){
        console.log(element.title)
    }
});
};
console.log(`Blogovi sa duplo vise pozitivnih ocena`)
naslovi(arrBlogs)



//peti zadatak

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = arr => {
    arr.forEach(element=> {
        if (element.title.endsWith("!")){
            console.log(element.title)
        }
    })
}

uzvicnik(arrBlogs)
