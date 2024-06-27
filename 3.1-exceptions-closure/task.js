'use strict'
const parseCount = (value) => {
    let numberConverted = Number.parseInt(value);
    if(Number.isNaN(numberConverted)) {
        throw new Error('Невалидное значение');
    }
    return numberConverted;
}

const validateCount = (val) => {
    try {
        return parseCount(val);
    } catch(error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter();
        const s = p / 2;
        const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
        return +(area.toFixed(3));
    }
}

const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}



