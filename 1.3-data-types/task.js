function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (parseInt(percent)) / 100;
    const c = parseInt(contribution);
    const a = parseInt(amount);
    const d = date(new Date().setFullYear(new Date().getFullYear() + 3));
    const creditPeriod = d.getFullYear() - new Date().getFullYear();

    if (Number.isNaN(p)) {
        return `Параметр "percent" содержит неправильное значение ${percent}`;
    }
    if (Number.isNaN(c)) {
        return `Параметр "contribution" содержит неправильное значение ${contribution}`;
    }
    if (Number.isNaN(a)) {
        return `Параметр "amount" содержит неправильное значение ${amount}`;
    }
    const creditAmount = a - c;
    const monthlyInterest = p / 12;
    const monthNum = d * 12;
    const monthlyPayment = creditAmount * (monthlyInterest + monthlyInterest / ((1 + monthlyInterest) ** monthNum - 1));
    return  +(monthlyPayment * creditPeriod).toFixed(2);
}

function getGreeting(name) {
    return (!name) ? `Привет, мир! Меня зовут Аноним.` : `Привет, мир! Меня зовут ${name}.`;
}

