'use strict';
String.prototype.isPalindrome = function() {
    const str = this.replace(/\s/g, '').toLowerCase();
    return this.replace(/\s/g, '')
               .split('')
               .reverse()
               .join('')
               .toLowerCase() === str;
}

const getAverageMark = (marks) => {
    if (marks.length === 0) return 0;
    const average = (marks.reduce((a, b) => a + b, 0) / marks.length);
    return +(average.toFixed());
    }

const checkBirthday = (birthday) => {
    const now = Date.now();
    const dateObject = Date.parse(new Date(birthday));
    const diff = now - dateObject;
    const age = diff / 31536000000;
    if(age > 18) return true;
}

