// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a, b) => a * b;
console.log(square(5, 7));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (r) => Math.PI * r * r;
console.log(squareCircle(5));


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

let squareCylinder = (h, radius) => 2 * Math.PI * radius * (radius + h);
console.log(squareCylinder(6, 2))


// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент.

let someArr = (arr) => {

    for (let arrElement of arr) {
        console.log(arrElement)
    }

}
someArr([15, 'fewo', 23, {name: '423', age: 423}])



// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let someText = (text) => document.write(`<p>${text}</p>`)
someText('fsgdfgdfg')