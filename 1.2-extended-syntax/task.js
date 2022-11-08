function getResult(a, b, c) {
    'use strict';
    const discrim = b ** 2 - 4 * a * (-c);
    const x1 = (-b + discrim ** (1 / 2)) / (2 * a);
    const x2 = (-b - discrim ** (1 / 2)) / (2 * a);

    if (discrim < 0) {
        return [];
    } else if (discrim === 0) {
        return [x1, x2];
    } else if (discrim > 0) {
        return [x1, x2];
    }
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        return marks.slice(0, 5).reduce((sum, curr) => sum + curr, 0);
    } else {
        return [];
    }
}

function askDrink(name, dateOfBirthday) {
    const year = new Date().getFullYear();
    const userAge = year - dateOfBirthday;
    let drinkAccess = (userAge > 18)
        ? console.log(`“Не желаете ли олд-фэшн, ${name}?”`)
        : console.log(`“Сожалею, ${name}?, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!”`);
}
