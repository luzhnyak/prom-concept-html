import Swiper from "swiper";
import "swiper/css";

import "swiper/css/pagination";  

import {
  
  Pagination,  
  
} from "swiper/modules";

let swiperInstance = null;

function initSlider() {
  const isUse = true;

  if (isUse && !swiperInstance) {
    swiperInstance = new Swiper(".clients-swiper", {
      modules: [ Pagination, ],
      slidesPerView: "auto",
      loop: true,
      speed: 1000,
      spaceBetween: 16,
      centeredSlides: true,
            
      breakpoints: {
        320: {
          spaceBetween: 16,
        },
        1440: {
          spaceBetween: 20,
        },
      }, 
      pagination: {
        el: ".swiper-pagination",
      }, 
      
    });
  } else if (!isUse && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener("load", initSlider);
window.addEventListener("resize", initSlider);
