"use strict";

// Hero Swiper
var heroSwiper = new Swiper(".heroSwiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 300,
  autoplay: { delay: 6000, disableOnInteraction: false },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const number = (index + 1).toString().padStart(2, "0");
      return `
        <span class="${className}">
          <svg class="progress-circle" width="48" height="48">
            <circle class="bg" cx="24" cy="24" r="20"></circle>
            <circle class="progress" cx="24" cy="24" r="20"></circle>
          </svg>
          <span class="number">${number}</span>
        </span>`;
    },
  },
});

heroSwiper.on("autoplayTimeLeft", function (s, time, progress) {
  const circumference = 2 * Math.PI * 20;
  document
    .querySelectorAll(".swiper-pagination-bullet .progress")
    .forEach((circle) => {
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;
    });

  const active = document.querySelector(
    ".swiper-pagination-bullet-active .progress"
  );
  if (active) {
    active.style.strokeDasharray = circumference;
    active.style.strokeDashoffset =
      circumference - circumference * (1 - progress);
  }
});

// My Swiper
var mySwiper = new Swiper(".mySwiper", {
  autoplay: { delay: 3000, disableOnInteraction: false },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

// Slider2
var slider2 = new Swiper(".slider2", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 300,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const labels = [
        "UNIQUE CUSTOMER JOURNEY",
        "PREMIUM ACCOUNTS",
        "COMPANY IS LICENSED IN SINGAPORE",
        "UNIQUE CUSTOMER JOURNEY",
        "PREMIUM ACCOUNTS",
        "COMPANY IS LICENSED IN SINGAPORE",
      ];
      const number = (index + 1).toString().padStart(2, "0");

      return `
        <div class="tab ${className}">
          <span class="tab-number">${number}</span>
          <span class="tab-label">${labels[index]}</span>
          <div class="progress-bar"><span></span></div>
          <svg class="arrow" viewBox="0 0 23 23">
            <path d="M2 2L21 2M21 2L21 21M21 2L2 21" stroke="#F38AB2" stroke-width="3"/>
          </svg>
        </div>`;
    },
  },
});

slider2.on("autoplayTimeLeft", function (s, time, progress) {
  document
    .querySelectorAll(".custom-pagination .progress-bar span")
    .forEach((el) => (el.style.width = "0%"));

  const active = document.querySelector(
    ".custom-pagination .swiper-pagination-bullet-active .progress-bar span"
  );
  if (active) {
    active.style.width = ((1 - progress) * 100).toFixed(1) + "%";
  }
});

let tl1, tl2, tl3;

slider2.on("slideChange", function () {
  if (slider2.activeIndex === 0) {
    if (tl1) tl1.restart();
    else tl1 = playSlide1Animation();
  }
  if (slider2.activeIndex === 1) {
    if (tl2) tl2.restart();
    else tl2 = playSlide2Animation();
  }
  if (slider2.activeIndex === 2) {
    if (tl3) tl3.restart();
    else tl3 = playSlide3Animation();
  }
  if (slider2.activeIndex === 4) {
    if (tl1) tl1.restart();
    else tl1 = playSlide1Animation();
  }
  if (slider2.activeIndex === 5) {
    if (tl2) tl2.restart();
    else tl2 = playSlide2Animation();
  }
  if (slider2.activeIndex === 6) {
    if (tl3) tl3.restart();
    else tl3 = playSlide3Animation();
  }
});

slider2.on("init", function () {
  if (slider2.activeIndex === 0) tl1 = playSlide1Animation();
  if (slider2.activeIndex === 1) tl2 = playSlide2Animation();
  if (slider2.activeIndex === 2) tl3 = playSlide3Animation();
  if (slider2.activeIndex === 3) tl1 = playSlide1Animation();
  if (slider2.activeIndex === 4) tl2 = playSlide2Animation();
  if (slider2.activeIndex === 5) tl3 = playSlide3Animation();
});
slider2.init();

// Slider3
var slider3 = new Swiper(".slider3", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 300,
  autoplay: { delay: 4000, disableOnInteraction: false },
  pagination: {
    el: ".slider3-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const labels = [
        `<img src="images/mastercard.png" alt="Mastercard" /> <span>MasterCard World Elite</span>`,
        `<img src="images/visa.png" alt="Visa" /> <span>Visa Signature</span>`,
        `<img src="images/union.png" alt="UnionPay" /> <span>UnionPay Premium</span>`,
      ];
      return `
        <div class="tab ${className}">
          <span class="tab-label">${labels[index]}</span>
          <div class="progress-bar"><span></span></div>
        </div>`;
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      const currentSlide = this.slides[this.activeIndex];
      const targets = currentSlide.querySelectorAll(".cardPick");

      gsap.from(targets, {
        duration: 0.5,
        rotate: 0,
        ease: "power1.inOut",
        delay: 0.5,
      });
    },
  },
});

slider3.on("autoplayTimeLeft", function (s, time, progress) {
  document
    .querySelectorAll(".slider3-pagination .progress-bar span")
    .forEach((el) => (el.style.width = "0%"));

  const active = document.querySelector(
    ".slider3-pagination .swiper-pagination-bullet-active .progress-bar span"
  );
  if (active) {
    active.style.width = ((1 - progress) * 100).toFixed(1) + "%";
  }
});
const testiSwiper = new Swiper(".testiSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: false,
  delay: 0,
  loop: true,
  freeModeMomentum: false,
  speed: 7000, // how long to translate one wrapper length
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
