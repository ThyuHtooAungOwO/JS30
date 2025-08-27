const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const clear = document.getElementById("clear");
const checkAll = document.getElementById("check_all");
const uncheckAll = document.getElementById("uncheck_all");
let items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  if (!input.value) return;
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, list);
  this.reset();
  this.focus();
}

function populateList(lists = [], listElement) {
  listElement.innerHTML = lists
    .map((item, i) => {
      return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" 
                ${item.done ? "checked" : ""} />
            <label for="item${i}" class="todo-text">${item.text}</label>
        </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, list);
}

function clearItems() {
  localStorage.clear();
  items = [];
  populateList(items, list);
}

function setAllItemsDone(value) {
  items.forEach((item) => (item.done = value));
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, list);
}

form.addEventListener("submit", addItem);
populateList(items, list);
list.addEventListener("click", toggleDone);
clear.addEventListener("click", clearItems);
checkAll.addEventListener("click", () => setAllItemsDone(true));
uncheckAll.addEventListener("click", () => setAllItemsDone(false));
