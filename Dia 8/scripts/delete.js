import { statusCheckArray, WISH_LIST } from "./statusCheckArray.js";

export const deleteWish = function (ARRAY_WISHES) {
  const WISH = document.querySelector("#list");
  console.log("🚀 ~ file: delete.js:22 ~ setTimeout ~ ARRAY_WISHES", ARRAY_WISHES);
  if (event.target.attributes[3].textContent === "delete") {
    const wish_name = event.target.parentElement.childNodes[0].textContent;
    const LI = event.target.parentElement.offsetParent;
    // LI.classList.add("slide-out-left");
    LI.classList.add("swing-out-top-bck");

    setTimeout(() => {
      WISH.removeChild(LI);

      const INDEX_TO_DEL = ARRAY_WISHES.findIndex(
        (element, index) => element.wish === wish_name
      );

      ARRAY_WISHES.splice(INDEX_TO_DEL, 1);
      statusCheckArray(ARRAY_WISHES);
    }, 450);
  }
};
