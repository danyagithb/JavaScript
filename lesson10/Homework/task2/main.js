// #j693ca8
//
// – створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let buttonTask2 = document.getElementById('button-task2');

let form = document.forms.formTask2;

form.onsubmit = function () {
    let age = this.userAge.value;
    if (!age) {
        alert('Введите возраст');
    } else if (age < 18) {
        alert('Ваш возраст меньше 18');
    } else if (age > 18) {
        alert('Вам есть 18');
    }
}