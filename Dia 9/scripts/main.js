import { getInputValue } from "./addWish.js";
// f
import { deleteAll } from "./deleteAll.js";
import { deleteWish } from "./delete.js";
import { loadWishes } from "./localStorage.js";

const ARRAY_WISHES = [];

export const FORM = document.querySelector(".container-form");
const BTN_DEL_ALL = document.querySelector(".form-btn-del-all");
const UL_WISH_LIST = document.querySelector("#list");

document.addEventListener("DOMContentLoaded", (e) => {
  loadWishes();
  FORM.addEventListener("submit", function (e) {
    getInputValue(ARRAY_WISHES, FORM, e);
  });
  BTN_DEL_ALL.addEventListener("submit", function (e) {
    e.preventDefault();
    deleteAll(ARRAY_WISHES);
  });
  UL_WISH_LIST.addEventListener("click", function (e) {
    e.preventDefault();
    deleteWish(ARRAY_WISHES, e);
  });
});
