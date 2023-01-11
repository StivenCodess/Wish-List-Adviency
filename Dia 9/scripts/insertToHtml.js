const WISH_LIST = document.querySelector("#list");

export const insertToHtml = function (WISH_ITEM) {
  const LI = document.createElement("li");
  LI.setAttribute("id", "container-wish");
  LI.classList.add("container-wish");

  const DIV_AMOUNT = document.createElement("div");
  DIV_AMOUNT.classList.add("scale-in-center-rapid");
  DIV_AMOUNT.classList.add("wish-amount");

  const AMOUNT = document.createElement("p");
  AMOUNT.textContent = `${WISH_ITEM.amount}`;
  DIV_AMOUNT.appendChild(AMOUNT);

  const DIV_WRAPPER_ITEM = document.createElement("div");
  DIV_WRAPPER_ITEM.classList.add("container-item-wrap");

  const DIV_WISH = document.createElement("div");
  DIV_WISH.classList.add("wish");
  DIV_WISH.classList.add("slide-in-left-rapid");

  const WISH = document.createElement("p");
  WISH.textContent = `${WISH_ITEM.wish}`;
  DIV_WISH.appendChild(WISH);

  const IMG = document.createElement("img");
  IMG.classList.add("wish-item-btn-del");
  IMG.setAttribute("src", "assets/icons8-desechos-de-papel-96.png");
  IMG.setAttribute("alt", "desechos de papel");
  IMG.setAttribute("name", "delete");
  DIV_WISH.appendChild(IMG);
  DIV_WRAPPER_ITEM.appendChild(DIV_WISH);

  LI.appendChild(DIV_AMOUNT);
  LI.appendChild(DIV_WRAPPER_ITEM);
  WISH_LIST.appendChild(LI);
};
