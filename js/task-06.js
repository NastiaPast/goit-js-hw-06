const formInputEl = document.querySelector("#validation-input");
formInputEl.addEventListener("blur", (event) => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    formInputEl.classList.add("valid");
    formInputEl.classList.remove("invalid");
  } else {
    formInputEl.classList.add("invalid");
    formInputEl.classList.remove("valid");
  }
});
