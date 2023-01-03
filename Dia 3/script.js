const inputGift = document.getElementById("gift");
const btn = document.getElementById("add");
const listGifts = document.getElementById("list");
const total = 0;
console.log("Hola");
btn.onclick = function(e){
    e.preventDefault();

    if(!(inputGift.value == "")){
    const element = inputGift.value;
    const li = document.createElement("li");
    li.className = "card-list-item";
    li.textContent = element;
    listGifts.appendChild(li);
    }
    inputGift.value = "";
}