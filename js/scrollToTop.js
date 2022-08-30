//Scroll To Top
let scrollToTopBtn = document.querySelector(".scrollToTop");

window.onscroll = () => {
  window.scrollY >= 500
    ? (scrollToTopBtn.style.opacity = 1)
    : (scrollToTopBtn.style.opacity = 0);
};

scrollToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
