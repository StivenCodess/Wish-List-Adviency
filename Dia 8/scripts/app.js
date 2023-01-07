//* VARIABLES GLOBALES

const DOC = document;
const FORM = document.querySelector(".container-form");

//* FUNCIONES
function domLoaded() {
  statusCheckArray(ARRAY_WISHES);
}

const getInputValue = function (e) {
  e.preventDefault();
  const FORM_INPUT_VALUE = document.querySelector(".form-input").value;
  if (FORM_INPUT_VALUE) {
    let result = statusOfInput(FORM_INPUT_VALUE);

    if (result === false) {
      createWishItem(FORM_INPUT_VALUE);
      FORM.reset();
    } else {
      console.log("WISH REPETIDO");
      showNotifiMessage(2);
    }
  } else {
    console.log("INPUT VACIO");
    showNotifiMessage(1);
  }
};

const statusOfInput = function (FORM_INPUT_VALUE) {
  let result = ARRAY_WISHES.some(
    (element) => element.wish.toUpperCase() === FORM_INPUT_VALUE.toUpperCase()
  );
  return result;
};

const createWishItem = function (FORM_INPUT_VALUE) {
  const WISH_ITEM = {
    wish: FORM_INPUT_VALUE,
    delete: false,
  };
  insertWishItemToArray(WISH_ITEM);
  return WISH_ITEM;
};

const insertWishItemToArray = function (WISH_ITEM) {
  ARRAY_WISHES.push(WISH_ITEM);
  statusCheckArray(ARRAY_WISHES);
  insertToHtml(WISH_ITEM);
};

const insertToHtml = function (WISH_ITEM) {
  const LI = document.createElement("li");
  const DIV = document.createElement("div");
  DIV.classList.add("wish-amount");
  DIV.textContent = "5";
  LI.classList.add("wish-item");
  LI.textContent = `${WISH_ITEM.wish}`;
  const DIV_WRRAP = document.createElement("div");
  LI.insertAdjacentElement("afterbegin", DIV);
  const IMG = document.createElement("img");
  IMG.classList.add("wish-item-btn-del");
  IMG.setAttribute("src", "assets/icons8-desechos-de-papel-96.png");
  IMG.setAttribute("alt", "desechos de papel");
  IMG.setAttribute("name", "delete");

  LI.appendChild(IMG);
  // WISH_LIST.appendChild(DIV);
  WISH_LIST.appendChild(LI);
};

const deleteAll = function (e) {
  e.preventDefault();
  ARRAY_WISHES.forEach((element, index) => {
    ARRAY_WISHES.splice(index);
  });
  WISH_LIST.innerHTML = "";
  showSantaGreeting(SANTA_GIFT, SANTA_MESSAGE, BTN_DEL_ALL, WISH_LIST);
};

const deleteWish = function (e) {
  if (e.target.attributes[3].textContent === "delete") {
    const wish_name = e.target.parentElement.childNodes[0].textContent;
    const LI = e.target.parentElement;
    LI.classList.add("slide-out-left");
    setTimeout(() => {
      WISH_LIST.removeChild(LI);
      const INDEX_TO_DEL = ARRAY_WISHES.findIndex(
        (element, index) => element.wish === wish_name
      );

      ARRAY_WISHES.splice(INDEX_TO_DEL, 1);

      statusCheckArray(ARRAY_WISHES);
    }, 300);
  }
};

//* FUNCIONES TO DISPLAY NONE

const showNotifiMessage = function (message) {
  const NO_WISHH = document.querySelector(".no-wishh");
  const REPEAT_WISHH = document.querySelector(".repeat-wishh");
  switch (message) {
    case 1:
      {
        NO_WISHH.style.display = "";
        REPEAT_WISHH.style.display = "none";

        setTimeout(() => {
          NO_WISHH.classList.add("bounce-out-left");
        }, 2500);

        setTimeout(() => {
          NO_WISHH.style.display = "none";
          NO_WISHH.classList.remove("bounce-out-left");
        }, 4000);
      }
      break;
    case 2:
      {
        NO_WISHH.style.display = "none";
        REPEAT_WISHH.style.display = "";
        setTimeout(() => {
          REPEAT_WISHH.classList.add("bounce-out-left");
        }, 2500);
        setTimeout(() => {
          REPEAT_WISHH.style.display = "none";
          REPEAT_WISHH.classList.remove("bounce-out-left");
        }, 4000);
      }
      break;
    default:
      console.log("Algo salio mal!");
      break;
  }
};

//* EVENTS LISTENERS

DOC.addEventListener("DOMContentLoaded", domLoaded);
FORM.addEventListener("submit", getInputValue);
BTN_DEL_ALL.addEventListener("submit", deleteAll);
WISH_LIST.addEventListener("click", deleteWish);
