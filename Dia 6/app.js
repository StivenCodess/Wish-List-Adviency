const input = document.querySelector(".form-input");
const btn_add = document.querySelector(".form-btn");
const list = document.querySelector(".card-list");
const btn_del_all = document.querySelector(".deleteall-btn");
const dummy = document.querySelector(".dummy");

// btn_del_all.style.display = 'none';
dummy.style.margin = "20px";

function addGift(event){
    event.preventDefault();
    const text = input.value;
    if(input.value){
        list.innerHTML +=`  <li class="card-list-item">
                            <p class="text">${text}</p>
                            <i class="fa-solid fa-trash"></i>
                            </li>
                            `
    dummy.style.opacity = "0";
    setTimeout(() => {
        dummy.style.display = "none";
    }, 1000);
    }
    input.value = "";
    console.log(list.children);
    

}

function deletGift(event){
    event.preventDefault();
    list.removeChild(event.srcElement.parentElement);
    if(list.children.length == "0"){
        dummy.style.display = "block";
        setTimeout(() => {
            dummy.style.opacity = "1";
        }, 300);
    }
}

function deleteAll(event){
    event.preventDefault();
    list.innerHTML="";
    dummy.style.display = "block";
        setTimeout(() => {
            dummy.style.opacity = "1";
        }, 100);
}

btn_add.addEventListener("click",addGift);
list.addEventListener("click",deletGift);
btn_del_all.addEventListener("click",deleteAll);