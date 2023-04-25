//Scroll To Top
let scrollToTopBtn = document.querySelector(".scrollToTop");

window.onscroll = () => {
  window.scrollY >= 500
    ? (scrollToTopBtn.style.display = 'block')
    : (scrollToTopBtn.style.display = 'none');
};

scrollToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
