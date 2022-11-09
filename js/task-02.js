const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listEl = document.querySelector("#ingredients");

//--------Олдскульный метод--------

// const elements = [];

// for (const ingredient of ingredients) {
// 	const liEl = document.createElement("li");
// 	liEl.classList.add("item");
// 	liEl.textContent = ingredient;
// 	elements.push(liEl);
// }

// console.log(elements);
// listEl.append(...elements);

//--------Обычный современный метод--------

// const elements = ingredients.map(ingredient => {
// 	const liEl = document.createElement("li");
// 	liEl.classList.add("item");
// 	liEl.textContent = ingredient;

// 	return liEl;
// });

// console.log(elements);
// listEl.append(...elements);

//--------Решение с помощью функции--------

const makeIngredientsList = options => {
	return options.map(option => {
		const liEl = document.createElement("li");
		liEl.classList.add("item");
		liEl.textContent = option;

		return liEl;
	});
};

const elements = makeIngredientsList(ingredients);
console.log(elements);
listEl.append(...elements);
