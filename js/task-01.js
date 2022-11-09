const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemsEl.length);

// Тоже годный код

// for (const category of itemsEl) {
// 	const categoryTitleEl = category.querySelector("h2");
// 	console.log("Category:", categoryTitleEl.textContent);
// 	const categoryListEl = categoryTitleEl.nextElementSibling;
// 	console.log("Elements:", categoryListEl.childElementCount);
// };

itemsEl.forEach(myFunction);

function myFunction(category) {
	const categoryTitleEl = category.querySelector("h2");
	console.log("Category:", categoryTitleEl.textContent);
	const categoryListEl = categoryTitleEl.nextElementSibling;
	console.log("Elements:", categoryListEl.childElementCount);
}
