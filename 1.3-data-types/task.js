function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (percent) / 100;
    const c = contribution;
    const a = amount;

    if (p !== Number.isNaN(parseInt((p))) return `Параметр ${p} содержит неправильное значение ${percent}`;
    if (c !== Number.isNaN(parseInt(c))) return `Параметр ${c} содержит неправильное значение ${contribution}`;
    if (a !== Number.isNaN(parseInt(a))) return `Параметр ${a} содержит неправильное значение ${amount}`;

    const creditAmount = a - c;
    const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
    const creditPeriod = nextYearDate.getFullYear() - new Date().getFullYear();
    const monthNum = creditPeriod * 12;
    const totalAmount = creditAmount * (p + p / (((1 + p) ^ monthNum) - 1)).toFixed(2);
    return totalAmount;
}

console.log(calculateTotalMortgage(10, 0, 50000, 2025));

function getGreeting(name) {
    return (!name) ? `Привет, мир! Меня зовут Аноним.` : `Привет, мир! Меня зовут ${name}.`;
}

