const menubtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("active");
  nav.classList.toggle("active");
});

// Change the background video when click on the gallery images
const bgVideoList = document.querySelectorAll(".bg-video");
const trailers = document.querySelectorAll(".trailer");
const models = document.querySelectorAll(".model");
const cards = document.querySelectorAll(".carousel__a");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");

function changeVideo(name) {
  bgVideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });
  trailers.forEach((trailer) => {
    trailer.classList.remove("active");
    if (trailer.classList.contains(name)) {
      trailer.classList.add("active");
    }
  });

  models.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });
}

function pauseVideo() {
  const screens = document.querySelectorAll(".screen-video");

  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  bgVideoList.forEach((video) => {
    video.pause();
    pause.classList.remove("active");
    play.classList.add("active");
  });
}
function playVideo() {
  const screens = document.querySelectorAll(".screen-video");

  screens.forEach((screen) => {
    screen.style.display = "block";
  });
  bgVideoList.forEach((video) => {
    video.play();
  });

  play.classList.remove("active");
  pause.classList.add("active");
}
