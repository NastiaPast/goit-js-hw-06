const categoriesEl = document.querySelector("#categories");
const itemsEl = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
itemsEl.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} \nElements: ${element.lastElementChild.children.length}`
  );
});
