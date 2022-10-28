import { auto } from '@popperjs/core';
import Swiper from '../vendor/swiper';


// (function () {
//   "use strict";

//   const breakpoint = window.matchMedia("(min-width:1024px)");
//   let slider;

//   const breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (slider !== undefined) slider.destroy(true, true);

//       return;
//     } else if (breakpoint.matches === false) {
//       return enableSwiper();
//     }
//   };
//   const enableSwiper = function () {
//     slider = new Swiper(".mobile-slider", {
//     slidesPerView: "auto",
//     spaceBetween: 20,
//     observer: true,
//     observeParents: true
//     });
//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();

let mainSlider = new Swiper(".chose-picture", {
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
      nextEl: '.swiper-button-next',
    },
});
    let twitSlider = new Swiper(".twit-swap", {
    slidesPerView: "auto",
    spaceBetween: 50,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev',
    },
    
    });
  let gallarySlider = new Swiper(".gallary-swap", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
  nextEl: '.swiper-button-next3',
  prevEl: '.swiper-button-prev3',
    },
   
    });
    

