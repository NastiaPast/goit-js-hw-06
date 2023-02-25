const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const makeIngredientsList = (options) => {
  return options.map((option) => {
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("item");
    listItemEl.textContent = option;
    return listItemEl;
  });
};
const elements = makeIngredientsList(ingredients);
listEl.append(...elements);
