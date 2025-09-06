gsap.registerPlugin(ScrollTrigger, SplitText);

// Normal timeline animations that should play in sequence
var tl = gsap.timeline();
tl.from(
  ".site_header",
  1,
  { autoAlpha: 0, y: -100, ease: "power1.inOut" },
  "0"
);
tl.from(
  [".home_hero_left, .heroSwiper"],
  1,
  { autoAlpha: 0, y: 60, ease: "power1.inOut" },
  "0"
);
tl.staggerFrom(
  [".home_hero_left h2, .home_hero_left .copy, .home_hero_left .boxes"],
  0.5,
  { autoAlpha: 0, y: 20, ease: "power1.inOut" },
  0.1,
  "0"
);
gsap.from([".product .left", ".slider2"], {
  duration: 1,
  autoAlpha: 0,
  y: 120,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".slider2",
    start: "top 80%",
    end: "bottom 20%",
    // markers: true,
  },
});

gsap.from([".account .title > *"], {
  duration: 1,
  autoAlpha: 0,
  y: 120,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".account",
    start: "top 50%",
    end: "bottom 20%",
    // markers: true,
  },
});
gsap.from([".account .box"], {
  duration: 1,
  autoAlpha: 0,
  y: 120,
  stagger: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".account",
    start: "top 50%",
    end: "bottom 20%",
    // markers: true,
  },
});

gsap.from([".price .title > *"], {
  duration: 1,
  autoAlpha: 0,
  y: 120,
  stagger: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".price",
    start: "top 30%",
    end: "bottom 20%",
    // markers: true,
  },
});

gsap.from([".mobile h2, .features-list, .store"], {
  duration: 1,
  autoAlpha: 0,
  y: 120,
  stagger: 0.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".mobile",
    start: "top 30%",
    end: "bottom 20%",
    // markers: true,
  },
});
