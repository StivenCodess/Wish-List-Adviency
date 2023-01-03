//* VARIABLES GLOBALES

const DOC = document;
const FORM = document.querySelector(".container-form");
const ARRAY_WISHES = [];

//* VARIABLES MODIFICAN DISPLAY
const SANTA_GIFT = document.querySelector(".container-santaGift"),
  SANTA_MESSAGE = document.querySelector(".container-santaSign"),
  BTN_DEL_ALL = document.querySelector(".form-btn-del-all"),
  WISH_LIST = document.querySelector(".wish-list-deff"),
  SANTA_GREETING_BUBBLE = document.querySelector(".container-text"),
  SANTA_GREETING = document.querySelector(".santaGreeting");

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
  LI.classList.add("wish-item");
  LI.textContent = `${WISH_ITEM.wish}`;
  const img = document.createElement("img");
  img.classList.add("wish-item-btn-del");
  img.setAttribute("src", "assets/icons8-desechos-de-papel-96.png");
  img.setAttribute("alt", "desechos de papel");
  img.setAttribute("name", "delete");
  LI.appendChild(img);
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

const showSantaGreeting = function (SANTA_GIFT, SANTA_MESSAGE, BTN_DEL_ALL, WISH_LIST) {
  //$ Santa Gift TO -> DISPLAY NONE
  SANTA_GIFT.style.display = "none";

  //$ Santa Message TO -> DISPLAY NONE
  SANTA_MESSAGE.style.display = "none";

  //$ Button Of Delete All TO -> DISPLAY NONE
  BTN_DEL_ALL.style.display = "none";

  //$ Wish List TO -> DISPLAY NONE
  WISH_LIST.style.display = "none";

  //$ Santa Greeting  TO -> ---REMOVE DISPLAY NONE---
  SANTA_GREETING.style.display = "";

  //$ Santa Greeting BUBBLE SPEECH TO -> ---REMOVE DISPLAY NONE----
  SANTA_GREETING_BUBBLE.style.display = "";
};

const showSantaAddMore = function (
  SANTA_GIFT,
  SANTA_GREETING,
  SANTA_GREETING_BUBBLE,
  BTN_DEL_ALL,
  WISH_LIST,
  SANTA_MESSAGE
) {
  //$ Santa Gift TO -> DISPLAY NONE
  SANTA_GIFT.style.display = "none";

  //$ Santa Greeting  TO -> DISPLAY NONE
  SANTA_GREETING.style.display = "none";

  //$ Santa Greeting BUBBLE SPEECH TO -> DISPLAY NONE
  SANTA_GREETING_BUBBLE.style.display = "none";

  //$ Button Of Delete All TO -> DISPLAY NONE
  BTN_DEL_ALL.style.display = "none";

  //$ Wish List TOGGLE -> CLASS WISH-LIST-ONE -----REMOVE STYLE DISPLAY-----
  WISH_LIST.removeAttribute("style", "display");
  WISH_LIST.classList.add("wish-list-one");
  WISH_LIST.classList.remove("wish-list");

  //$ Santa Message REMOVE STYLE DISPLAY
  SANTA_MESSAGE.style.display = "";
};

const showBtnDelAll = function (
  SANTA_GIFT,
  SANTA_GREETING,
  SANTA_MESSAGE,
  SANTA_GREETING_BUBBLE,
  WISH_LIST,
  BTN_DEL_ALL
) {
  //$ Santa Gift TO -> DISPLAY NONE
  SANTA_GIFT.style.display = "none";

  //$ Santa Greeting  TO -> DISPLAY NONE
  SANTA_GREETING.style.display = "none";

  //$ Santa Message TO -> DISPLAY NONE
  SANTA_MESSAGE.style.display = "none";

  //$ Santa Greeting BUBBLE SPEECH TO -> DISPLAY NONE
  SANTA_GREETING_BUBBLE.style.display = "none";

  //$ Wish List TOGGLE -> CLASS WISH-LIST
  WISH_LIST.classList.remove("wish-list-one");
  WISH_LIST.classList.add("wish-list");

  //$ Button Of Delete All REMOVE DISPLAY NONE
  BTN_DEL_ALL.style.display = "";
};

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

const statusCheckArray = function (ARRAY_WISHES) {
  if (ARRAY_WISHES.length === 0) {
    showSantaGreeting(SANTA_GIFT, SANTA_MESSAGE, BTN_DEL_ALL, WISH_LIST);
  } else if (ARRAY_WISHES.length === 1) {
    showSantaAddMore(
      SANTA_GIFT,
      SANTA_GREETING,
      SANTA_GREETING_BUBBLE,
      BTN_DEL_ALL,
      WISH_LIST,
      SANTA_MESSAGE
    );
  } else {
    showBtnDelAll(
      SANTA_GIFT,
      SANTA_GREETING,
      SANTA_MESSAGE,
      SANTA_GREETING_BUBBLE,
      WISH_LIST,
      BTN_DEL_ALL
    );
  }
};

//* EVENTS LISTENERS

DOC.addEventListener("DOMContentLoaded", domLoaded);
FORM.addEventListener("submit", getInputValue);
BTN_DEL_ALL.addEventListener("submit", deleteAll);
WISH_LIST.addEventListener("click", deleteWish);
