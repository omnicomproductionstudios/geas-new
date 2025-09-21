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
tl.from(".about-arrow", 1, { y: "-100%", ease: "power1.inOut" });

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
  stagger: 0.05,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".mobile",
    start: "top 30%",
    end: "bottom 20%",
    // markers: true,
  },
});

const path = document.querySelector(".ServicesBlock_ArrowLine__TrPyL");
const circle = document.querySelector(".ServicesBlock_ArrowCircle__Uf9nZ");

if (path && circle) {
  const length = path.getTotalLength();

  // prepare stroke
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  circle.style.opacity = 0;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".serviceArrow", // parent svg
        start: "top 80%", // adjust as needed
        end: "bottom 40%",
        toggleActions: "play none none reverse",
        // markers: true, // debug
      },
    })
    .to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.out",
    })
    .to(
      circle,
      {
        opacity: 1,
        scale: 1.2,
        transformOrigin: "center",
        duration: 0.4,
        ease: "back.out(2)",
      },
      "-=0.3"
    );
}

// Slide 1 animation
function playSlide1Animation() {
  const tl = gsap.timeline();

  // Circle paths
  const icoCircle = document.querySelectorAll(".circle path");
  icoCircle.forEach((el) => {
    const length = el.getTotalLength();
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 0,
    });
  });
  tl.to(
    icoCircle,
    {
      autoAlpha: 1,
      strokeDashoffset: 0,
      ease: "power1.inOut",
      stagger: 0.1,
    },
    "0"
  );

  // Line paths
  const icoPath = document.querySelectorAll(".line1 path, .line2 path");
  icoPath.forEach((el) => {
    const length = el.getTotalLength();
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 0,
    });
  });
  gsap.set(".line1-dot", { autoAlpha: 0 });
  tl.to(
    icoPath,
    {
      strokeDashoffset: 0,
      duration: 1,
      autoAlpha: 1,
      ease: "power1.inOut",
      stagger: 0.2,
    },
    "1"
  );
  tl.to(".line1-dot", { autoAlpha: 1 }, ">");

  // SVG Icons
  const ico = document.querySelectorAll(".svgIco");
  gsap.set(ico, { autoAlpha: 0 });
  tl.to(
    ico,
    {
      autoAlpha: 1,
      ease: "power1.inOut",
      stagger: 0.1,
    },
    "+=0.01"
  );

  return tl;
}

// Slide 2 animation
function playSlide2Animation() {
  const tl = gsap.timeline();

  gsap.set(".slide2back1 path", {
    autoAlpha: 0,
    scale: 0.5,
    transformOrigin: "center",
  });
  gsap.set(".slide2line", { autoAlpha: 0 });
  gsap.set(".slide2dot", { autoAlpha: 0 });
  gsap.set(".slider2dot", { autoAlpha: 0 });
  gsap.set(".slider2tab", { autoAlpha: 0, x: 200 });
  gsap.set(".slider2cursor", { autoAlpha: 0 });

  tl.to(
    ".slide2back1 path",
    {
      autoAlpha: 1,
      stagger: 0.2,
      scale: 1,
    },
    0.1
  );

  tl.to(".slide2line", { autoAlpha: 1 }, "-=0.5");
  tl.to(".slide2dot", { autoAlpha: 1, stagger: 0.15 }, ">");

  const slider2line = document.querySelectorAll(
    ".slider2line1 path, .slider2line2 path"
  );
  slider2line.forEach((el) => {
    const length = el.getTotalLength();
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 0,
    });
  });
  tl.to(
    slider2line,
    {
      strokeDashoffset: 0,
      duration: 1,
      autoAlpha: 1,
      ease: "power1.inOut",
      stagger: 0.2,
    },
    "1"
  );

  tl.to(".slider2dot", { autoAlpha: 1 }, ">");
  tl.to(".slider2tab", { autoAlpha: 1, x: 100 }, ">");
  tl.to(".slider2cursor", { autoAlpha: 1 }, ">");

  return tl;
}

function playSlide3Animation() {
  const tl = gsap.timeline();
  gsap.set(".slider3back1", {
    visibility: "hidden",
    scale: 0.5,
    transformOrigin: "center",
  });
  gsap.set(".slider3logo", { autoAlpha: 0 });
  gsap.set(".slider3last", { autoAlpha: 0 });

  tl.to(
    ".slider3back1",
    { visibility: "visible", stagger: 0.2, scale: 1, ease: "power1.inOut" },
    "0"
  );
  const slider3line = document.querySelectorAll(".slider3line path");
  slider3line.forEach((el) => {
    const length = el.getTotalLength();
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 0,
    });
  });
  tl.to(
    slider3line,
    { autoAlpha: 1, strokeDashoffset: 0, ease: "power1.inOut" },
    ">"
  );

  const slider3linePath = document.querySelectorAll(".slider3linePath path");
  slider3linePath.forEach((el) => {
    const length = el.getTotalLength();
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 0,
    });
  });
  tl.to(
    slider3linePath,
    {
      autoAlpha: 1,
      strokeDashoffset: 0,
      ease: "power1.inOut",
    },
    ">"
  );
  tl.to(
    ".slider3logo",
    { autoAlpha: 1, stagger: 0.1, ease: "power1.inOut" },
    ">"
  );
  tl.to(".slider3last", { autoAlpha: 1, ease: "power1.inOut" }, ">");

  return tl;
}

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".svgMobile",
    start: "top 80%",
  },
});

const mobileline = document.querySelectorAll(".mobileline path");
mobileline.forEach((el) => {
  const length = el.getTotalLength();
  gsap.set(el, {
    strokeDasharray: length,
    strokeDashoffset: length,
    autoAlpha: 0,
  });
});
tl4.to(
  mobileline,
  { autoAlpha: 1, strokeDashoffset: 0, duration: 2.5, ease: "power1.inOut" },
  "0"
);
const mobileInside = document.querySelectorAll(".mobileInside path");
mobileInside.forEach((el) => {
  const length = el.getTotalLength();
  gsap.set(el, {
    strokeDasharray: length,
    strokeDashoffset: length,
    autoAlpha: 0,
  });
});
tl4.to(
  mobileInside,
  { autoAlpha: 1, strokeDashoffset: 0, duration: 3, ease: "power1.inOut" },
  "0.3"
);

tl4.to(".svgMobile", 0.5, { display: "none", ease: "power1.inOut" }, ">");
tl4.to(".phone_end", 0.5, { display: "block", ease: "power1.inOut" }, ">");

const why_choose_arrow = document.querySelector(".why_choose_arrow path");

if (why_choose_arrow) {
  const length = why_choose_arrow.getTotalLength();

  // prepare stroke
  why_choose_arrow.style.strokeDasharray = length;
  why_choose_arrow.style.strokeDashoffset = length;
  gsap.set(".why_choose_circle", { autoAlpha: 0 });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".why_choose_arrow", // parent section/container
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    })

    .fromTo(
      why_choose_arrow,
      { strokeDashoffset: -length },
      { strokeDashoffset: 0, duration: 2, ease: "power2.out" }
    )
    .to(".why_choose_circle", { autoAlpha: 1 });
}
const bar = document.querySelector(".process-progress-bar");
const inner = document.querySelector(".process-progress-inner");

// Calculate available distance
const distance = bar.offsetHeight - inner.offsetHeight;

gsap.to(".process-progress-inner", {
  y: distance,
  ease: "none",
  scrollTrigger: {
    trigger: ".process-widget-block",
    start: "top center",
    end: "bottom 30%",
    scrub: true,
    // markers: true,
  },
});
