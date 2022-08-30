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
