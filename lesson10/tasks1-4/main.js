// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let buttonTask1 = document.getElementById('button-task1');

buttonTask1.onclick = function () {
    let div = document.getElementById('text');
    div.style.display = 'none';
}


// #ymAmN2xJ
//
// Стоврити форму з трьома полями для name, sruname, age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об’єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let form = document.forms.form;
let text = document.getElementById('text3');

form.onsubmit = function (ev) {
    let name = form.userName.value;
    let surname = form.userSurName.value;
    let age = form.userAge.value;

    ev.preventDefault()
    let obj = {name, surname, age}
    text.innerText = obj.name + ' ' + obj.surname + ' ' + obj.age
    // text.innerText = `name: ${name}, surname: ${surname}, age: ${age}`
}


// #2VaLt4vDczH
//
// Є сторінка, на якій є блок, я кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.getElementById('task4').innerText = currentNumber;














