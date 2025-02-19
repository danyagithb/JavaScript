// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Popel(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;

}

let popel1 = new Popel('Karolina', 19, 35);
let popel2 = new Popel('Karolina', 23, 32);
let popel3 = new Popel('Karolina', 40, 35);
let popel4 = new Popel('Katya', 21, 37);
let popel5 = new Popel('Angelina', 20, 38);
let popel6 = new Popel('Karolina', 19, 35);
let popel7 = new Popel('Vasya', 19, 40);
let popel8 = new Popel('Karolina', 19, 38);
let popel9 = new Popel('Mila', 18, 35);
let popel10 = new Popel('Karolina', 19, 36);

let arrayPopel = [popel1, popel2, popel3, popel4, popel5, popel6, popel7, popel8, popel9, popel10]

class Prince {

    constructor (name, age, requiredSize) {
        this.name = name;
        this.age = age;
        this.requiredSize = requiredSize;
    }

}

let prince = new Prince('Denis', 29, 37)

for (const popel of arrayPopel) {
    if (popel.size === prince.requiredSize) {
        console.log(popel)
    }

}

let find = arrayPopel.find(girl => girl.size === prince.requiredSize);
console.log(find)
