function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");
const handleButtonClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = body.style.backgroundColor;
};
buttonEl.addEventListener("click", handleButtonClick);
