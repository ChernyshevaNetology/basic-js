function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (+percent) / 100;
    const c = +contribution;
    const a = +amount;
    const creditAmount = a - c;
    const currentMonth = new Date().getMonth();
    const nom = currentMonth - date.getMonth();
    const totalAmount = creditAmount * (p + p / (((1 + p) ** nom) - 1)).toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    if (name === '') return 'Привет, мир! Меня зовут Аноним.';
    return `Привет, мир! Меня зовут ${name}`;
}

