const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInputEl = formEl.elements.email.value;
  const passwordInputEl = formEl.elements.password.value;

  if (emailInputEl === "" || passwordInputEl === "") {
    alert("Please fill in all the fields.");
  } else {
    const formDataEl = { email: emailInputEl, password: passwordInputEl };
    console.log(formDataEl);
    formEl.reset();
  }
});
