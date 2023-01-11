import { insertToHtml } from "./insertToHtml.js";
import { CONTAINER_SANTAS, statusCheckArray } from "./statusCheckArray.js";
let ARRAY_WISHES_LOAD = [];

export const saveDB = function (ARRAY_WISHES) {
  localStorage.setItem("wishes", JSON.stringify(ARRAY_WISHES));
};

export const loadWishes = function () {
  ARRAY_WISHES_LOAD = JSON.parse(localStorage.getItem("wishes"));
  if (ARRAY_WISHES_LOAD === null) {
    ARRAY_WISHES_LOAD = [];
  }
  if (ARRAY_WISHES_LOAD.length === 0) {
    statusCheckArray(ARRAY_WISHES_LOAD);
  } else {
    ARRAY_WISHES_LOAD.forEach((element) => {
      insertToHtml(element);
      statusCheckArray(ARRAY_WISHES_LOAD);
    });
  }
};

export const deleteDB = function (ARRAY_WISHES, INDEX_TO_DEL) {
  ARRAY_WISHES_LOAD = ARRAY_WISHES;
  ARRAY_WISHES_LOAD.splice(INDEX_TO_DEL, 1);
  saveDB(ARRAY_WISHES_LOAD);
};

export const deleteAllDB = function (ARRAY_WISHES) {
  ARRAY_WISHES_LOAD = ARRAY_WISHES;

  ARRAY_WISHES_LOAD.forEach((element, index) => {
    ARRAY_WISHES_LOAD.splice(index, 1);
  });

  saveDB(ARRAY_WISHES_LOAD);
};
