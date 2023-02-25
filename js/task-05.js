const formInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");
formInputEl.addEventListener("input", (event) => {
  userNameOutputEl.textContent =
    event.target.value === "" ? "Anonymous" : event.target.value;
});
