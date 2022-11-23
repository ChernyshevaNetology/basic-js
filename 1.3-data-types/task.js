function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (parseInt(percent)) / 100;
    const c = parseInt(contribution);
    const a = parseInt(amount);

    if (Number.isNaN(p)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (p < 0) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
    if (Number.isNaN(c)) {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    } else if (c < 0) {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    }
    if (Number.isNaN(a)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    } else if (a <= 0) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }
    if (new Date(date).getFullYear() < new Date().getFullYear()) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date.toLocaleString()}`;
    }
    const creditPeriod = (new Date(date).getFullYear() - new Date().getFullYear()) * 12;
    if (c >= a) return 0;
    const creditAmount = a - c;
    const monthlyInterest = p / 12;
    const monthlyPayment = creditAmount * (monthlyInterest + monthlyInterest / ((1 + monthlyInterest) ** creditPeriod - 1));
    return +(monthlyPayment * creditPeriod).toFixed(2);
}

function getGreeting(name) {
    return (!name) ? `Привет, мир! Меня зовут Аноним.` : `Привет, мир! Меня зовут ${name}.`;
}

