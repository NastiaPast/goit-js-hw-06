function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const containerEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxContainer = document.createElement("div");
    boxContainer.style.width = `${i * 10 + boxSize}px`;
    boxContainer.style.height = `${i * 10 + boxSize}px`;
    boxContainer.style.backgroundColor = getRandomHexColor();
    containerEl.append(boxContainer);
  }
};

const destroyBoxes = () => {
  containerEl.innerHTML = "";
};
buttonCreateEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});
buttonDestroyEl.addEventListener("click", destroyBoxes);
