// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('choose and write 1, 0 or -3');

if (x !== 0) {
    console.log('true')
} else {
    console.log('false')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 53;

if (time >= 0 && time < 15) {
    console.log('1')
} else if (time >= 15 && time < 30) {
    console.log('2')
} else if (time >= 30 && time < 45) {
    console.log('3')
} else if (time >= 45 && time < 60) {
    console.log('4')
}



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 23;

if (day > 0 && day <= 10) {
    console.log('1')
} else if (day > 10 && day <= 20) {
    console.log('2')
} else if (day > 20 && day <= 30) {
    console.log('3')
}



// - Скласти розклад на тиждень за допомоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch ('Sunday') {
    case 'Sunday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    case 'Monday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    case 'Tuesday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    case 'Wednesday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    case 'Thursday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    case 'Friday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    case 'Saturday':
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        console.log('Thing');
        break

    default:
        console.log('Enter')
}








