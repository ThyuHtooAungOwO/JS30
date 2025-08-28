const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 180; // max shadow distance

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // random neon HSL colors
  const color1 = `hsl(${Math.random() * 360}, 100%, 70%)`;
  const color2 = `hsl(${Math.random() * 360}, 100%, 70%)`;
  const color3 = `hsl(${Math.random() * 360}, 100%, 70%)`;
  const color4 = `hsl(${Math.random() * 360}, 100%, 70%)`;

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 5px ${color1},
    ${xWalk * -1}px ${yWalk}px 10px ${color2},
    ${yWalk}px ${xWalk * -1}px 15px ${color3},
    ${yWalk * -1}px ${xWalk}px 20px ${color4}
  `;
}

hero.addEventListener("mousemove", shadow);
