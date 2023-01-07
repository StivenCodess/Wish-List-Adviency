import { showSantaGreeting } from "./display_functions.js";
import { SANTA_MESSAGE, BTN_DEL_ALL } from "./statusCheckArray.js";

const WISH_LIST = document.querySelector("#list");
const CONTAINER_SANTAS = document.querySelector(".container-santas");
const SANTA_GREETING = document.querySelector(".container-santa-greeting");

export const deleteAll = function (ARRAY_WISHES) {
  console.log(ARRAY_WISHES);
  ARRAY_WISHES.forEach((element, index) => {
    ARRAY_WISHES.splice(index);
  });
  WISH_LIST.innerHTML = "";
  showSantaGreeting(
    SANTA_MESSAGE,
    BTN_DEL_ALL,
    WISH_LIST,
    CONTAINER_SANTAS,
    SANTA_GREETING
  );
};
