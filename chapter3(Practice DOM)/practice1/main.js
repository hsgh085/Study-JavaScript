const inputText = document.querySelector(".inputText");
const plusBtn = document.querySelector(".plusBtn");
const trashBtn = document.querySelector("#trashBtn");
const list = document.querySelector(".list");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const p = document.createElement("p");
  const i = document.createElement("i");
  li.setAttribute("class", "item");
  p.textContent = e.target.inputText.value;
  i.setAttribute("class", "fa-solid fa-trash");
  i.setAttribute("id", "trashBtn");
  li.appendChild(p);
  li.appendChild(i);
  list.appendChild(li);

  i.addEventListener("click", () => {
    li.remove();
  });
});
