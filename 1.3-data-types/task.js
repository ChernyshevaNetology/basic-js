function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict';
    const values = [
        {
            paramName: "Процентная ставка",
            val: percent
        },
        {
            paramName: "Первоначальный взнос",
            val: contribution
        },
        {
            paramName: "Общая стоимость",
            val: amount
        },
        {
            paramName: "Срок ипотеки",
            val: date
        }
    ];

        for (const {paramName, val} of values) {
        if (val instanceof Date) {
            if (new Date(date).getFullYear() < new Date().getFullYear()) {
                return `Параметр "${paramName}" содержит неправильное значение ${val.toLocaleString()}`;
            }
        }
        if (isNaN(val) || val < 0) {
            return `Параметр "${paramName}" содержит неправильное значение ${val}`;
        }
    }
    if (contribution >= amount) return 0;
    const creditPeriod = (new Date(date).getFullYear() - new Date().getFullYear()) * 12;
    const creditAmount = amount - contribution;
    const monthlyInterest = (percent / 100) / 12;
    const monthlyPayment = creditAmount * (monthlyInterest + monthlyInterest / ((1 + monthlyInterest) ** creditPeriod - 1));
    return +(monthlyPayment * creditPeriod).toFixed(2);
}

const getGreeting = (name) => { return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}.`;}
