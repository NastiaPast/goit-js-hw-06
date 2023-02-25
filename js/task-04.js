const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");
let counterValue = 0;
const handleBtnDecrementClick = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};
const handleBtnIncrementClick = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};
buttonDecrementEl.addEventListener("click", handleBtnDecrementClick);
buttonIncrementEl.addEventListener("click", handleBtnIncrementClick);
