import { statusCheckArray } from "./statusCheckArray.js";
import { insertToHtml } from "./insertToHtml.js";
import { showNotifiMessage } from "./showNotify.js";

export const getInputValue = function (ARRAY_WISHES, FORM, e) {
  e.preventDefault();
  const FORM_INPUT_VALUE = document.querySelector(".form-input").value;
  const FORM_NUM = document.querySelector(".form-input-num").value;
  if (FORM_INPUT_VALUE) {
    let result = statusOfInput(FORM_INPUT_VALUE, ARRAY_WISHES);

    if (result === false) {
      createWishItem(FORM_INPUT_VALUE, FORM_NUM, ARRAY_WISHES);
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

const statusOfInput = function (FORM_INPUT_VALUE, ARRAY_WISHES) {
  let result = ARRAY_WISHES.some(
    (element) => element.wish.toUpperCase() === FORM_INPUT_VALUE.toUpperCase()
  );
  return result;
};

const createWishItem = function (FORM_INPUT_VALUE, FORM_NUM, ARRAY_WISHES) {
  const WISH_ITEM = {
    wish: FORM_INPUT_VALUE,
    amount: FORM_NUM,
    delete: false,
  };
  insertWishItemToArray(WISH_ITEM, ARRAY_WISHES);
  return WISH_ITEM;
};

const insertWishItemToArray = function (WISH_ITEM, ARRAY_WISHES) {
  ARRAY_WISHES.push(WISH_ITEM);
  insertToHtml(WISH_ITEM); //$ Cambie para que insertHTML se llame primero.
  statusCheckArray(ARRAY_WISHES);
};
