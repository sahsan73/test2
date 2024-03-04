"use strict";

//////////////////////////////////////////////////////////
// CAROUSEL COMPONENT
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
let visibleItem = items[0];
let idx = 0;

for (let i = 0; i < dots.length; ++i) {
  dots[i].addEventListener("click", function () {
    visibleItem.classList.add("hidden");
    dots[idx].classList.remove("dot--fill");
    visibleItem = items[i];
    visibleItem.classList.remove("hidden");
    dots[i].classList.add("dot--fill");
    idx = i;
  });
}

//////////////////////////////////////////////////////////
// TAB COMPONENT
const tabBtns = document.querySelectorAll(".btn");
const tabs = document.querySelectorAll(".tab-content");
let currActiveTab = 0;
for (let i = 0; i < tabBtns.length; ++i) {
  tabBtns[i].addEventListener("click", function () {
    if (currActiveTab === i) return;

    tabBtns[currActiveTab].classList.remove("active-tab");
    tabs[currActiveTab].classList.add("hidden");

    currActiveTab = i;
    tabBtns[currActiveTab].classList.add("active-tab");
    tabs[currActiveTab].classList.remove("hidden");
  });
}

//////////////////////////////////////////////////////////
// STICKY NAVBAR
const el = document.querySelector(".header-hero-section");
const header = document.querySelector(".primary-header");
const logoTxt = document.querySelector(".primary-header p");

const obs = new IntersectionObserver(function (entries) {
  const [ent] = entries;
  if (ent.isIntersecting) {
    header.classList.remove("sticky");
    logoTxt.classList.add("hidden");
  } else {
    header.classList.add("sticky");
    logoTxt.classList.remove("hidden");
  }
});

obs.observe(el);

//////////////////////////////////////////////////////////
// SMOOTH SCROLL
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      const el = document.querySelector(href);
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector(".logo").addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({ top: 0, behavior: "smooth" });
});
