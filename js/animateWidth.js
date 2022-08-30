//Animate Width On Scrolling
let skillSection = document.querySelector(".our-skills");
let skillPercentage = document.querySelectorAll(".the-progress span");
let isWidthAnimated = false;
document.addEventListener("scroll", function () {
  if (isInViewport(skillSection)) {
    if (!isWidthAnimated) {
      skillPercentage.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    }
    isWidthAnimated = true;
  }
});