const input = document.getElementById("input");
const btnAdd = document.getElementById("btnAdd");
const list = document.getElementById("list");
const btnDel = document.getElementById("btndel");
let id = 0;

function addGift(e){
    e.preventDefault();
    const text = input.value;
    list.innerHTML += `  
                        <li class="card-list-item" id="${id}">
                        <p class="card-list-p">${text}</p>
                        <i id="btndel" class="fa-solid fa-trash"></i>
                        </li>
                    `
    id++;
    input.value = "";
}

function showEvent(event){
    if(event.srcElement.nodeName == 'I'){
        console.log(event.srcElement.parentElement.id);
        deleteGift(event.srcElement.parentElement.id);
    }
    console.log(event.srcElement.nodeName);
}

function deleteGift(id){
    const giftToDelete = document.getElementById(id);
    list.removeChild(giftToDelete);
}

list.addEventListener("click", showEvent);
btnAdd.addEventListener("click", addGift);
