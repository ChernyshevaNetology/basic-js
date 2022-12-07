function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const p = (parseInt(percent)) / 100;
    const values = [
        {
            paramName: 'Процентная ставка',
            val: p
        },
        {
            paramName: 'Первоначальный взнос',
            val: contribution
        },
        {
            paramName: 'Общая стоимость',
            val: amount
        },
        {
            paramName: 'Срок ипотеки',
            val: date
        }
    ];

        for (const val of values) {
        if (val.val instanceof Date) {
            if (new Date(date).getFullYear() < new Date().getFullYear()) {
                return `Параметр ${val.paramName} содержит неправильное значение ${date.toLocaleString()}`;
            }
        }
        if (isNaN(val.val) || val.val < 0) {
            `Параметр ${val.paramName} содержит неправильное значение ${val}`;
        }
    }

    const creditPeriod = (new Date(date).getFullYear() - new Date().getFullYear()) * 12;

    if (contribution >= amount) return 0;

    const creditAmount = amount - contribution;
    const monthlyInterest = p / 12;
    const monthlyPayment = creditAmount * (monthlyInterest + monthlyInterest / ((1 + monthlyInterest) ** creditPeriod - 1));
    return +(monthlyPayment * creditPeriod).toFixed(2);
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}.`;
}

