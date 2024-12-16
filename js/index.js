'use strict';

const userNumbInput = prompt("Введіть ціле число");

if (!userNumbInput?.trim()) {
    console.log("OK! Пока");
}
else {
    const userNumb = Number(userNumbInput);
    
    if (!Number.isInteger(userNumb)) {  // перевірка на ціле число та NaN.
        console.log("Error! Incorrect number");
    }
    else if (userNumb <= 0) {
        console.log("Задане число занадто мале, щоб квадрат будь-якого числа від 1 до 100 його не перевищував.");
    }
    else {
        const validIntegers = [];

        for (let i = 1; i <= 100; i++) {
            if (i ** 2 > userNumb) break;
            validIntegers.push(i);
        }

        console.log(`Всі цілі числа до 100, квадрат яких не перевищує ${userNumb} це: ${validIntegers.join(', ')}`);
    }
}



