const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  console.log(event.target.value);
  textEl.style.fontSize = `${event.target.value}px`;
});
