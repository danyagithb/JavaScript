// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let input = document.getElementById('weight');
let div = document.getElementById('result');

input.oninput = function () {
    div.innerText = +this.value * 2.2;
}


// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// let sessionsList = [];
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

function addToLocalStorage(arrayName, objToAdd) {
    let item =  localStorage.getItem(arrayName);
    if (!item) {
        throw new Error('Массива нету')
    }

    let array = JSON.parse(item);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }

    localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage('sessionsList', {})




// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('table');

let tableForm = document.forms['tableTask'];

tableForm.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    let linieValue = +tableForm.strings.value;
    let cellValue = +tableForm.cells.value;
    let textValue = tableForm.textInside.value;

    for (let i = 0; i < linieValue; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < cellValue; j++) {
            let td = document.createElement('td');
            td.innerText = textValue;
            tr.appendChild(td);

        }

        table.appendChild(tr);


    }
}





