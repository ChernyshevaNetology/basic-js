function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (+percent) / 100;
    const c = +contribution;
    const a = +amount;
    const creditAmount = a - c;
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
    const period = nextYearDate - new Date().getFullYear;
    const monthNum = period * 12;
    const totalAmount = creditAmount * (p + p / (((1 + p) ** monthNum) - 1)).toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    const validUsers = ['Пётр'];
    let anonymous = 'Аноним';
    let result = (!validUsers.includes(name))? `Привет, мир! Меня зовут ${anonymous}.` : `Привет, мир! Меня зовут ${name}.`;
    return result;
}

