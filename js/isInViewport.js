//Element is in the viewport function
function isInViewport(el) {
  if (window.scrollY >= el.offsetTop - 100) {
    return true;
  }
}
