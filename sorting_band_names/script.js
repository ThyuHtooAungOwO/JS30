const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "A Day to Remember",
  "Motionless In White",
  "As I Lay Dying",
  "Parkway Drive",
  "While She Sleeps",
  "Counterparts",
  "Northlane",
  "Architects",
  "Beartooth",
  "Underoath",
  "The Amity Affliction",
  "Fit for a King",
  "Stray from the Path",
  "Every Time I Die",
  "The Ghost Inside",
  "Miss May I",
  "In Hearts Wake",
  "Stick to Your Guns",
];
const bandsElement = document.getElementById("bands");

function strip(bands) {
  return bands.replace(/^(a |the |an )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

bandsElement.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
