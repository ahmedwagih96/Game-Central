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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2d8d67cfdcmsh8b9b76dea59ec67p1cdcd7jsn6ec002e4944c",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
  .then((response) => response.json())
  .then((response) => setArticles(response))
  .catch((err) => console.error(err));

const articlesPosts = document.getElementById("articlesPosts");

function setArticles(articles) {
  articles.length = 8;
  articles.forEach((article) => {
    const { title, thumbnail, short_description } = article;
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
    <div>
      <img src=${thumbnail} alt="thumbnail" />
      <div class="content">
        <h3>${title}</h3>
        <p>
          ${short_description}
        </p>
      </div>
    </div>
    <div class="info">
      <a href="">Read More</a>
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
    `;
    articlesPosts.append(div);
  });
}

//Countdown Timer
let unitDays = document.querySelector(".days");
let unitHours = document.querySelector(".hours");
let unitMinutes = document.querySelector(".minutes");
let unitSeconds = document.querySelector(".seconds");
let currentYear = new Date().getFullYear();
let countDownDate = new Date(`Dec 31, ${currentYear} 23:59:59`).getTime();

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

//Element is in the viewport function
function isInViewport(el) {
  if (window.scrollY >= el.offsetTop - 200) {
    return true;
  }
}

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

//Shuffle Select
let videoCount = 0;
let videos = document.querySelectorAll(".video .container .box > div");
videos.forEach((p, index) => {
  p.onclick = () => {
    videos.forEach((e) => {
      e.classList.remove("checked");
    });
    p.classList.add("checked");
    changeText(p);
    slider(index);
  };
});

let shuffleBtn = document.querySelector(".video .container .box h3 i");
shuffleBtn.onclick = () => {
  videos.forEach((video) => {
    video.classList.remove("checked");
  });
  let randomVideo = Math.floor(Math.random() * videos.length);
  videos[randomVideo].classList.add("checked");
  videoCount = randomVideo;
  containsClass(videos);
};

let videoShuffle = document.querySelectorAll(
  ".video .container .box-video .video-holder img"
);
let btnLeft = document.querySelector(
  ".video .container .box-video .fa-arrow-left"
);
let btnRight = document.querySelector(
  ".video .container .box-video .fa-arrow-right"
);

btnLeft.onclick = () => {
  videoCount--;
  if (videoCount < 0) {
    videoCount = videoShuffle.length - 1;
  }
  slider(videoCount);
};

btnRight.onclick = () => {
  videoCount++;
  if (videoCount >= videoShuffle.length) {
    videoCount = 0;
  }
  slider(videoCount);
};

//Image Slider
function slider(e) {
  videoShuffle.forEach((e) => {
    e.classList.remove("checked");
  });
  videoShuffle[e].classList.add("checked");
  videoShuffle.forEach((e, ind) => {
    if (e.classList.contains("checked")) {
      videos.forEach((p) => {
        p.classList.remove("checked");
      });
      videos[ind].classList.add("checked");
      changeText(videos[ind]);
    }
  });
}

//Checks if class Checked is true
function containsClass(arr) {
  arr.forEach((e, index) => {
    if (e.classList.contains("checked")) {
      changeText(e);
      slider(index);
    }
  });
}

//Changing the Text of Video Description
let videoText = document.querySelector(
  ".video .container .box-video .video-discription"
);
function changeText(p) {
  innertText = p.innerHTML;
  videoText.innerHTML = innertText;
}
