

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
let blog4 = {
    title: "Uvod u JavaScript",
    likes: 150,
    dislikes: 60
};
let blog5 = {
    title: "If naredba grananja",
    likes: 250,
    dislikes: 160
};




let user1 = {
    username: "Jelena_Matejic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    myLikes: function () {

        let sum = 0;

        this.blogs.forEach(b => {

            sum += b.likes;
        });
        return sum;

    }
};

let user2 = {
    username: "Stefan_Stanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes: function () {

        let sum = 0;

        this.blogs.forEach(b => {

            sum += b.likes;
        });
        return sum;

    }
};
//ispis
console.log(user1.username)

//podaci o prvom blogu korisnika 1
console.log(user1.blogs[0])

//naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title)


//niz korisnika

let users = [user1, user2];

//Ko su autori blogova

users.forEach(u => {
    console.log(u.username)
})

//ispisati sve naslove blogova koje su napisali autori iz niza users



users.forEach(u => {
    //u je jedan user iz niza
    let blogsU = u.blogs;//svi blogovi tekuceg korisnika iz niza users
    blogsU.forEach(b => {
        console.log(b.title)
    })
});


//drugi zadatak 

//Ispisati imena onih autora koji imaju ispod 30 godina
//let users = [user1,user2];


users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

//treci zadatak

console.log("Ispisati naslove onih blogova koji imaju više od 50 lajkova");

users.forEach(u => {
    let blogsU = u.blogs;
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});

//cetvrti zadataka

console.log("Ispisati sve blogove autora čiji je username 'Stefan_Stanimirovic'");

users.forEach(u => {
    if (u.username == "Stefan_Stanimirovic") {
        let blogsU = u.blogs;  /// ne mora promenljiva vec odmah u.blogs.forEach
        blogsU.forEach(uss => {
            console.log(uss.title)
        });
    };
});

//peti zadatak

console.log("Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali")

// prvi nacin

users.forEach(u => {
    let SumaLajkovaU = 0; //suma lajkova jednog user-a
    u.blogs.forEach(b => { // krecemo se od bloga do bloga korisnika u
        SumaLajkovaU += b.likes;
    });
    console.log(SumaLajkovaU)

    if (SumaLajkovaU > 200) {
        console.log(u.username);
    }
});
console.log()

// drugi nacin

users.forEach(u => {
    if (u.myLikes() > 200) {
        console.log(u.username)
    }
});





//sesti zadatak

console.log(`Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena`)



let globalAvgLikes = arr => {
    let globalnaSuma = 0;
    let globalniBrojac = 0;
    arr.forEach(u => {
        globalnaSuma += u.myLikes();
        globalniBrojac += u.blogs.length;
    });
    return globalnaSuma/globalniBrojac;

}
console.log(`Globalni prosek je ${globalAvgLikes(users)}`)

let blogoviSaNatprosecnoLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b=> {
            if(b.likes> globalAvg){
                console.log(b.title)
            }
        })
    })
}

console.log(`Ispis naslova sa natprosecnim brojem lajkova`)
blogoviSaNatprosecnoLajkova(users)



let globalno = Array => {
    let suma =0;
    let brojac =0;
    Array.forEach(element => {
        suma += element.myLikes();
        brojac += element.length;
    })
    return suma/brojac
}

let ispodproseka = arr =>{
    let prosek = globalno();

    arr.forEach(element=> {
        element.blogs.forEach( korisnik => {
            if (prosek > korisnik.likes){
                console.log(korisnik.title)
            }
        })
    })
}

// zadatak sa danima



