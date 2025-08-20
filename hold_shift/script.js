const checkboxs = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;
let inBetween = false;

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    checkboxs.forEach((checkbox) => {
      if (checkbox == lastChecked || checkbox == this) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxs.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
