const audio = {
  a: new Audio("sounds/clap.wav"),
  s: new Audio("sounds/hihat.wav"),
  d: new Audio("sounds/kick.wav"),
  f: new Audio("sounds/openhat.wav"),
  g: new Audio("sounds/boom.wav"),
  h: new Audio("sounds/ride.wav"),
  j: new Audio("sounds/snare.wav"),
  k: new Audio("sounds/tom.wav"),
  l: new Audio("sounds/tink.wav"),
};

const playSound = (key) => {
  const btn = document.querySelector(`button[data-key="${key}"]`);
  const sound = audio[key];
  if (!btn || !sound) return;

  sound.currentTime = 0;
  sound.play();

  btn.classList.add("active");
  setTimeout(() => btn.classList.remove("active"), 150);
};

document.addEventListener("keydown", (e) => {
  playSound(e.key.toLowerCase());
});

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => playSound(btn.dataset.key));
});
