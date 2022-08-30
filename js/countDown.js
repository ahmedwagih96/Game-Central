//Countdown Timer
let unitDays = document.querySelector(".days");
let unitHours = document.querySelector(".hours");
let unitMinutes = document.querySelector(".minutes");
let unitSeconds = document.querySelector(".seconds");
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

window.onload = () => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let getDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  unitDays.innerHTML = getDays < 10 ? `0${getDays}` : getDays;

  let getHours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  unitHours.innerHTML = getHours < 10 ? `0${getHours}` : getHours;

  let getMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  unitMinutes.innerHTML = getMinutes < 10 ? `0${getMinutes}` : getMinutes;

  let getSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  unitSeconds.innerHTML = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

  let eventCountDown = setInterval(() => {
    dateNow = new Date().getTime();
    dateDiff = countDownDate - dateNow;

    getDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    unitDays.innerHTML = getDays < 10 ? `0${getDays}` : getDays;

    getHours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    unitHours.innerHTML = getHours < 10 ? `0${getHours}` : getHours;

    getMinutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    unitMinutes.innerHTML = getMinutes < 10 ? `0${getMinutes}` : getMinutes;

    getSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    unitSeconds.innerHTML = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

    if (dateDiff < 0) {
      clearInterval(eventCountDown);
    }
  }, 1000);
};