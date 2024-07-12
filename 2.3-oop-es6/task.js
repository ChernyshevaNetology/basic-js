class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        if((this.state * 1.5) > 100) {
            return this.state = 100;
        }
        if((this.state * 1.5) < 100) {
            return this.state;
        }

    }
    set state(num) {
        if(num < 0) {
            this.state = 0;
        }
        if(num > 100) {
            this.state = 100;
        }
        this._state = num;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount)
    this.type = 'novel';
   }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective';
    }
}

class Library extends DetectiveBook {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.books = [];
    }

    addBook(book) {
        if (this.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (const book of this.books) {
            console.log('book', book);
            console.log(book[type]);
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0]
            }
        }
        return null;
    }
}

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }
    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if ((typeof(grade) !== 'number') || (grade > 5 || grade < 1)) {
            throw `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
            // Нужно вывести количество оценко все равно.
        }
        if (!(subject in this.grades)) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {
        if(!this.grades[subject]) return 0;
        return (this.grades[subject].reduce(function(a, b) {
            return (a + b);
        }, 0)) / this.grades[subject].length;
        }
    getTotalAverage() {
        console.log(this.grades);
        return Object.keys(this.grades).reduce((acc, key) => {
           acc += this.getAverageBySubject(key)
            return acc;
        }, 0) / Object.keys(this.grades).length;
    }
}

// const library = new Library("Библиотека имени Ленина");
//
// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));
//
// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
//
// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// const log = new StudentLog('Олег Никифоров');
//
// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');
//
// console.log(log.getTotalAverage()); // 3,75