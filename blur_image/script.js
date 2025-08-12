const inputs = document.querySelectorAll("input");

function handleChange(e) {
  const variable = e.target.dataset.variable;
  const suffix = e.target.type == "range" ? "px" : "";
  document.documentElement.style.setProperty(variable, e.target.value + suffix);
}

inputs.forEach((input) => input.addEventListener("input", handleChange));
