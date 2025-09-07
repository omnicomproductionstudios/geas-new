"use strict";
var swiper = new Swiper(".heroSwiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true, // smooth fade between slides
  },
  speed: 300,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
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

swiper.on("autoplayTimeLeft", function (s, time, progress) {
  const circumference = 2 * Math.PI * 20; // r=20

  // Reset all progress circles
  document
    .querySelectorAll(".swiper-pagination-bullet .progress")
    .forEach((circle) => {
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference; // start empty
    });

  // Animate only the active one (0 → 100)
  const active = document.querySelector(
    ".swiper-pagination-bullet-active .progress"
  );
  if (active) {
    active.style.strokeDasharray = circumference;
    active.style.strokeDashoffset =
      circumference - circumference * (1 - progress);
  }
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".slider2", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 300,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const labels = [
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
            <path d="M2 2L21 2M21 2L21 21M21 2L2 21" 
              stroke="#F38AB2" stroke-width="3"/>
          </svg>
        </div>`;
    },
  },
});

// Animate progress bar with autoplay
swiper.on("autoplayTimeLeft", function (s, time, progress) {
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

swiper.on("slideChange", function () {
  if (swiper.activeIndex === 0) {
    if (tl1) tl1.restart();
    else tl1 = playSlide1Animation();
  }
  if (swiper.activeIndex === 1) {
    if (tl2) tl2.restart();
    else tl2 = playSlide2Animation();
  }
  if (swiper.activeIndex === 2) {
    if (tl3) tl3.restart();
    else tl3 = playSlide3Animation();
  }
});

// Run immediately when Swiper is ready
swiper.on("init", function () {
  // Force the animation for the first visible slide
  if (swiper.activeIndex === 0) tl1 = playSlide1Animation();
  if (swiper.activeIndex === 1) tl2 = playSlide2Animation();
  if (swiper.activeIndex === 2) tl3 = playSlide3Animation();
});

// If you are using Swiper with modules, you must explicitly init
swiper.init();
