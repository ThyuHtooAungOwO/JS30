const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + scrollTop,
    left: linkCoords.left + scrollLeft,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
triggers.forEach((a) =>
  a.addEventListener("mouseleave", () => {
    highlight.style.width = `0px`;
    highlight.style.height = `0px`;
  })
);
