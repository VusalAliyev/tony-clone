const navBtn = document.querySelector(".button");
const links = document.querySelector(".links");
const linksA = document.querySelectorAll(".nav-link");
const nav = document.querySelector("nav");
const span1 = document.querySelector(".w-span1");
const span2 = document.querySelector(".w-span2");
const span3 = document.querySelector(".w-span3");
const span4 = document.querySelector(".w-span4");

/* Nav Height */
navBtn.addEventListener("click", () => {
  links.classList.toggle("show");
  nav.classList.toggle("nav-height");
});

// linksA.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (!link.classList.contains("active")) {
//       clear();
//       link.classList.add("active");
//     }
//   });
// });

/* Nav Color Change On Scroll */
window.addEventListener("scroll", () => {
  let scrollH = document.documentElement.scrollTop;
  if (scrollH > 600 && scrollH < 2000) {
    clear();
    document.getElementById("aboutt").classList.add("active");
  } else if (scrollH < 600) {
    clear();
    document.getElementById("homee").classList.add("active");
  } else if (scrollH > 2000 && scrollH < 3000) {
    clear();
    document.getElementById("servicess").classList.add("active");
  } else if (scrollH > 3000 && scrollH < 4600) {
    clear();
    document.getElementById("portfolioo").classList.add("active");
  } else if (scrollH > 4600) {
    clear();
    document.getElementById("blogg").classList.add("active");
  }
});

clear = () => {
  linksA.forEach((link) => {
    link.classList.contains("active") && link.classList.remove("active");
  });
};

/* Skills Animation */
window.addEventListener("scroll", () => {
  let scrollH = document.documentElement.scrollTop;
  let scrollW = document.documentElement.scrollWidth;
  if (scrollH > 1250 && scrollW > 992) {
    span1.classList.add("increase-width1");
    span2.classList.add("increase-width2");
    span3.classList.add("increase-width3");
    span4.classList.add("increase-width4");
  } else if (scrollH > 1900 && scrollW > 768) {
    span1.classList.add("increase-width1");
    span2.classList.add("increase-width2");
    span3.classList.add("increase-width3");
    span4.classList.add("increase-width4");
  } else if (scrollH > 2400 && scrollW > 576) {
    span1.classList.add("increase-width1");
    span2.classList.add("increase-width2");
    span3.classList.add("increase-width3");
    span4.classList.add("increase-width4");
  } else if (scrollH > 2500) {
    span1.classList.add("increase-width1");
    span2.classList.add("increase-width2");
    span3.classList.add("increase-width3");
    span4.classList.add("increase-width4");
  }
});
