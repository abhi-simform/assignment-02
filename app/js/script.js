// Script for navigation bar
const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector("#navList");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("hamburger1");
   if (navList.style.maxHeight) {
      navList.style.maxHeight = null;
   } else {
      navList.style.maxHeight = navList.scrollHeight + "px";
   }
});

// Script for slider
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const slide1 = document.querySelector("#slide1");
const slider = document.querySelector("#slider");
const changeThis = document.querySelector("#changeThis");
const slides = document.querySelectorAll(".slider__slide");
var i = 1;
slides.forEach((e) => {
   e.style.opacity = 0.5;
});
slides[i - 1].style.opacity = 1;

nextBtn.addEventListener("click", () => {
   i++;
   if (i == 5) {
      i--;
   }
   changeThis.innerHTML = "0" + i;
   slider.scrollBy(slide1.scrollWidth, 0);
   slides.forEach((e) => {
      e.style.opacity = 0.5;
   });
   slides[i - 1].style.opacity = 1;
});

prevBtn.addEventListener("click", () => {
   i--;
   if (i == 0) {
      i++;
   }
   changeThis.innerHTML = "0" + i;
   slider.scrollBy(0 - slide1.scrollWidth, 0);
   slides.forEach((e) => {
      e.style.opacity = 0.5;
   });
   slides[i - 1].style.opacity = 1;
});
