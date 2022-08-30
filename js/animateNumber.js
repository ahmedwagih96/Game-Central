//Increase Numbers On Scrolling
let stats = document.querySelectorAll(".stats .box p");
let statsSection = document.querySelector(".stats");
let isNumberAnimated = false; //function started? No

document.addEventListener("scroll", function () {
  if (isInViewport(statsSection)) {
    if (!isNumberAnimated) {
      stats.forEach((stat) => startCount(stat));
    }
    isNumberAnimated = true; //function started? yes
  }
});

function startCount(stat) {
  let goal = stat.dataset.goal;
  let count = setInterval(() => {
    stat.textContent++;
    if (stat.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal); //the total duration is divided by the goal so that all elements finish counting together
}
