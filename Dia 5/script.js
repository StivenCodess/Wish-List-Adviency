const list = document.querySelector(".card-list");
const input = document.querySelector(".form-input");
const btnAdd = document.querySelector(".form-btnAdd");
const btnDel = document.querySelector(".card-list");
const btnDelAll = document.querySelector(".btn-deleteALL");


function addGift(e){
    e.preventDefault();
    const txt = input.value;
    if(input.value){
        let p = document.createElement("p");
        p.setAttribute('class','card-list-text');
        p.textContent = txt;
        let i = document.createElement("i");
        i.setAttribute('id','btndel');
        i.setAttribute('class','fa-solid fa-trash');
        let li = document.createElement("li");
        li.setAttribute('class','card-list-item');
        li.appendChild(p);
        li.appendChild(i);
        list.appendChild(li);
        // list.innerHTML+=`         
        //                 `
    }
    input.value = "";
}

function deleteGift(e){
    e.preventDefault();
    console.log(e);
    if(e.srcElement.nodeName == "I"){
        let parentElement = e.srcElement.parentElement;
        console.log(e);
        list.removeChild(parentElement);
    }
}

function deleteALL(e){
    e.preventDefault();
    list.replaceChildren();
}

btnAdd.addEventListener("click",addGift);
btnDel.addEventListener("click",deleteGift);
btnDelAll.addEventListener("click",deleteALL);



