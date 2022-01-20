import generateImage from "./general.js";


function genarateDiv (parent){
    let divItem = document.createElement("div");
    divItem.style.overflow =`hidden`
    parent.appendChild(divItem);
    return divItem;
}
function genarateItem (parent,src){
    let divItem = document.createElement("div");
    divItem.style.overflow =`right`
    let img = generateImage(src);
    divItem.appendChild(img);
    parent.appendChild(divItem);
    return divItem;
}



export{genarateDiv, genarateItem} ;