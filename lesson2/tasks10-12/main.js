// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
// Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Write first number');
let b = +prompt('Write second number');

if (a > b) {
    console.log('"А" больше')
} else if (b > a) {
    console.log('"B" больше')
} else if (a === b) {
    console.log('Они равны')
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = 0;

if (x === '' || x === 0 || x === null || x === false || x === NaN || x === undefined) {
    x = 'default'
}


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}





