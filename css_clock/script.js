const oldClock = new Audio("./sounds/mixkit-church-bell-loop-621.wav");
oldClock.volume = 0.5;

const wallClock = new Audio("./sounds/405423__straget__wall-clock-ticking.wav");
wallClock.volume = 0.8;
wallClock.currentTime = 0.65;

let currentHour = null;

function rotateHand(selector, value, max) {
  const deg = (value / max) * 360 + 90;
  document.querySelector(selector).style.transform = `rotate(${deg}deg)`;
}

function setDate() {
  const now = new Date();

  rotateHand(".second-hand", now.getSeconds(), 60);
  rotateHand(".min-hand", now.getMinutes(), 60);
  rotateHand(".hour-hand", now.getHours(), 12);

  if (now.getSeconds() === 0) {
    document.querySelector(".second-hand").style.transition = "none";
  } else {
    document.querySelector(".second-hand").style.transition = "all 0.05s";
  }

  if (currentHour !== now.getHours()) {
    currentHour = now.getHours();
    oldClock.currentTime = 0;
    oldClock.play();

    setTimeout(() => {
      oldClock.pause();
      oldClock.currentTime = 0;
    }, 9000);
  }
}

function secondsHandSound() {
  if (wallClock.paused) {
    wallClock.currentTime = 0.65;
    wallClock.play();
  }
}

setInterval(setDate, 1000);
setInterval(secondsHandSound, 1000);
