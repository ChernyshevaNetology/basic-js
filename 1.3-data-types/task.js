function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (parseInt(percent)) / 100;
    const c = parseInt(contribution);
    const a = parseInt(amount);
    const d = date;

    if (Number.isNaN(p)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
    if (Number.isNaN(c)) {
        return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`;
    }
    if (Number.isNaN(a)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }
    if (d.getFullYear < new Date().getFullYear()) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    }

    const creditPeriod = date.getFullYear() - new Date().getFullYear();
    const creditAmount = a - c;
    const monthlyInterest = p / 12;
    const monthNum = creditPeriod * 12;
    const monthlyPayment = creditAmount * (monthlyInterest + monthlyInterest / ((1 + monthlyInterest) ** monthNum - 1));
    return  +(monthlyPayment * creditPeriod).toFixed(2);
}

function getGreeting(name) {
    return (!name) ? `Привет, мир! Меня зовут Аноним.` : `Привет, мир! Меня зовут ${name}.`;
}

