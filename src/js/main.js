import "./swiper";

(function () {
  const burger = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger_menu");

  burger.addEventListener("click", () => {
    if (burgerMenu.classList.contains("open-burger")) {
      burgerMenu.classList.remove("open-burger");
      burger.src = "./src/img/svg/burger.svg";
    } else {
      burgerMenu.classList.add("open-burger");
      burger.src = "./src/img/svg/close.svg";
    }
  });
})();
