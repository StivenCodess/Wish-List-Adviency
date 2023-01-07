import { getInputValue } from "./addWish.js";
import { statusCheckArray } from "./statusCheckArray.js";
import { deleteAll } from "./deleteAll.js";
import { deleteWish } from "./delete.js";

const ARRAY_WISHES = [];
const FORM = document.querySelector(".container-form");
const BTN_DEL_ALL = document.querySelector(".form-btn-del-all");
const UL_WISH_LIST = document.querySelector("#list");

document.addEventListener("DOMContentLoaded", (e) => {
  statusCheckArray(ARRAY_WISHES);

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
