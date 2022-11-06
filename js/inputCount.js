//Count input Characters

let textarea = document.querySelector(".discounts .form textarea");
let inputSpan = document.querySelector(".discounts .form .textarea span");
let textProgress = document.querySelector(
  ".discounts .form .textarea .text-progress"
);
textarea.oninput = () => {
  let inputLength = textarea.value.length;
  inputCount(inputLength);
};

function inputCount(e) {
  inputSpan.innerHTML = 200 - e;
  textProgress.style.width = `${
    (e / textarea.getAttribute("maxlength")) * 100
  }%`;
  if (inputSpan.innerHTML === 0) {
    inputSpan.style.color = "red";
    textarea.style.color = "red";
    textProgress.style.background = "red";
  } else {
    inputSpan.style.color = "var(--main-color)";
    textarea.style.color = "black";
    textProgress.style.background = "var(--main-color)";
  }
}
