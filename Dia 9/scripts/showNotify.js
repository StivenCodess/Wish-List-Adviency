export const showNotifiMessage = function (message) {
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
