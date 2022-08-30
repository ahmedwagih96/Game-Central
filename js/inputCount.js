//Count input Characters

let inputChar = document.querySelector(".discounts .form textarea.input");
let inputSpan = document.querySelector(".discounts .form .textarea span");
let textProgress = document.querySelector(
  ".discounts .form .textarea .text-progress"
);
inputChar.oninput = () => {
  let inputLength = inputChar.value.length;
  inputCount(inputLength);
};

function inputCount(e) {
  inputSpan.innerHTML = inputChar.getAttribute("maxlength") - e;
  textProgress.style.width = `${
    (e / inputChar.getAttribute("maxlength")) * 100
  }%`;
  if (inputSpan.innerHTML == 0) {
    inputSpan.style.color = "red";
    inputChar.style.color = "red";
    textProgress.style.background = "red";
  } else {
    inputSpan.style.color = "var(--main-color)";
    inputChar.style.color = "black";
    textProgress.style.background = "var(--main-color)";
  }
}