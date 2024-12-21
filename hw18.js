const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ingredientsList.append(...elements);





let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

function decrement() {
    counterValue -= 1;
    updateUI();
}

function increment() {
    counterValue += 1;
    updateUI();
}

function updateUI() {
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
