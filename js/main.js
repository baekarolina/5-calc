const selector = '.calc';
const DOM = document.querySelector(selector);
const formulaDOM = DOM.querySelector('.formula');

const symbols = ['C', '+/-', '%', '/', '1', '2', '3', '*', '4', '5', '6', '-','7', '8', '9', '+', '0', '.', '<', '='];

let HTML = '';

for (let i = 0; i < symbols.length; i++) {
    HTML += ` <div class="key" data-symbol="${symbols[i]}"></div>`;
}
DOM.insertAdjacentHTML('beforeend', HTML);

const buttons = DOM.querySelectorAll('.key');

for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];

    btn.addEventListener('click', function() {
        const symbol = btn.dataset.symbol;
        formulaDOM.innerText += symbol;
    });
}