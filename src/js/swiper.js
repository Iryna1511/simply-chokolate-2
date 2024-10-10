import Swiper from "swiper";
import { Navigation, Keyboard, Pagination } from "swiper/modules";
import "swiper/css/scrollbar";

const swiper = new Swiper(".swiper", {
  modules: [Keyboard, Pagination],
  direction: "horizontal",
  loop: true,
  autoHeight: false,
  autoWidth: false,
  watchOverflow: true,
  simulateTouch: true,
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //     pageUpDown: true,
  //   },
  grabCursor: true,
  scrollbar: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1168: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

swiper.update();
