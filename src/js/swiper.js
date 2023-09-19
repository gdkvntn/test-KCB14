import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1.2,
  spaceBetween: "30",

  navigation: {
    nextEl: ".projects_arrows-next",
    prevEl: ".projects_arrows-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 1.5,
      spaceBetween: "30",
    },
  },
});
