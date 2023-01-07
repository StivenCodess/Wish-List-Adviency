export const showSantaGreeting = function (
  SANTA_MESSAGE,
  BTN_DEL_ALL,
  WISH_LIST,
  CONTAINER_SANTAS,
  SANTA_GREETING
) {
  SANTA_MESSAGE.classList.add("container-santaSign-NONE");
  BTN_DEL_ALL.classList.add("btn-del-all-NONE");
  WISH_LIST.classList.add("wish-NONE");
  SANTA_GREETING.classList.remove("container-santaGreeting-NONE");
  CONTAINER_SANTAS.classList.remove("container-santas-NONE");
};

export const showSantaAddMore = function (
  SANTA_GREETING,
  BTN_DEL_ALL,
  WISH_LIST,
  SANTA_MESSAGE,
  LIST,
  CONTAINER_WISH
) {
  CONTAINER_WISH[0].classList.remove("container-wish");
  CONTAINER_WISH[0].classList.add("container-wish-one");

  WISH_LIST.classList.remove("wish-NONE");
  WISH_LIST.classList.add("container-list-one");

  LIST.classList.remove("wish-NONE");
  LIST.classList.add("list-one");
  LIST.classList.remove("list");

  BTN_DEL_ALL.classList.add("btn-del-all-none");
  SANTA_GREETING.classList.add("container-santaGreeting-NONE");

  SANTA_MESSAGE.classList.remove("container-santaSign-NONE");
};

export const showBtnDelAll = function (
  SANTA_GREETING,
  SANTA_MESSAGE,
  WISH_LIST,
  BTN_DEL_ALL,
  CONTAINER_SANTAS,
  LIST,
  CONTAINER_WISH
) {
  CONTAINER_WISH[0].classList.remove("container-wish-one");
  CONTAINER_WISH[0].classList.add("container-wish");

  WISH_LIST.classList.add("container-list");
  WISH_LIST.classList.remove("container-list-one");

  LIST.classList.add("list");
  LIST.classList.remove("list-one");

  SANTA_MESSAGE.classList.add("slide-out-bottom");

  setTimeout(() => {
    SANTA_MESSAGE.classList.add("container-sign-NONE");
    CONTAINER_SANTAS.classList.add("container-santas-NONE");
    BTN_DEL_ALL.classList.remove("btn-del-all-NONE");
  }, 600);
};
