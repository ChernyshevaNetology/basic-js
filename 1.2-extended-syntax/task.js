function getResult(a, b, c) {
    'use strict';
    const discrim = b ** 2 - 4 * a * c;
    const x1 = (-b + discrim ** (1 / 2)) / (2 * a);
    const x2 = (-b - discrim ** (1 / 2)) / (2 * a);

    if (discrim > 0) {
        return [x1, x2];
    } else if (discrim === 0) {
        return [x1];
    } else {
        return [];
    }
}

function getAverageMark(marks) {
    const markLength = marks.length >= 5 ? marks.slice(0, 5).length : marks.length;
    if (marks.length === 0) return 0;
    else {
        return +((marks.slice(0, 5).reduce((sum, curr) => sum + curr, 0)) / markLength).toFixed();
    }
}

function askDrink(name, dateOfBirthday) {
    let currentYear = new Date().getFullYear();
    let userBirthDay = dateOfBirthday.getFullYear();
    let userAge = currentYear - userBirthDay;
    if (userAge > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}
