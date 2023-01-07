import {
  showSantaGreeting,
  showSantaAddMore,
  showBtnDelAll,
} from "./display_functions.js";

export const SANTA_MESSAGE = document.querySelector(".container-santaSign"),
  BTN_DEL_ALL = document.querySelector(".form-btn-del-all"),
  WISH_LIST = document.querySelector(".container-list"),
  SANTA_GREETING = document.querySelector(".container-santa-greeting"),
  CONTAINER_SANTAS = document.querySelector(".container-santas"),
  LIST = document.querySelector("#list");

export function statusCheckArray(ARRAY_WISHES) {
  const CONTAINER_WISH = document.querySelectorAll("#container-wish");

  if (ARRAY_WISHES.length === 0) {
    console.log("SHOW SANTA-GREETING " + ARRAY_WISHES.length);

    showSantaGreeting(
      SANTA_MESSAGE,
      BTN_DEL_ALL,
      WISH_LIST,
      CONTAINER_SANTAS,
      SANTA_GREETING
    );
  } else if (ARRAY_WISHES.length === 1) {
    console.log("SHOW SANTA-ADD-MORE " + ARRAY_WISHES.length);
    showSantaAddMore(
      SANTA_GREETING,
      BTN_DEL_ALL,
      WISH_LIST,
      SANTA_MESSAGE,
      LIST,
      CONTAINER_WISH
    );
  } else {
    console.log("SHOW BTN-DEL-ALL " + ARRAY_WISHES.length);
    showBtnDelAll(
      SANTA_GREETING,
      SANTA_MESSAGE,
      WISH_LIST,
      BTN_DEL_ALL,
      CONTAINER_SANTAS,
      LIST,
      CONTAINER_WISH
    );
  }
}
