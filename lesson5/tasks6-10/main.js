// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let foobar = (textForLi) =>
    document.write(`<ul>
        
        <li>${textForLi}</li>
        <li>${textForLi}</li>
        <li>${textForLi}</li>
        
    </ul>`)

foobar('Some Text')



// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write


let foobar2 = (text, quantity) => {

    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)

}

foobar2('fsdgsgd', 5)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let someArr = (arr) => {

    document.write(`<ul>`)
    for (let arrElement of arr) {

        document.write(`<li>${arrElement}</li>`)

    }
    document.write(`</ul>`)

}

someArr([234, '1gdfgdfg', 235, false, 23, true])



// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let foobar4 = (obj) => {

    for (let objItem of obj) {
        document.write(`<div>id: ${objItem.id}; name: ${objItem.name}; age: ${objItem.age}</div>`)
    }

}

foobar4([
    {id: 5, name: 'alex', age: 52353},
    {id: 53, name: 'Danya', age: 51233},
    {id: 4, name: 'alex', age: 533},
    {id: 55, name: 'oleg', age: 534},
])



// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let foobar5 = (numbers) => {

    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (minNumber > numbers[i]) {
            minNumber = numbers[i]
        }
    }

}

foobar5([4, 235, -345, -235, 256, 235, -6346])