// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

// let obj = {
//     name: 'danya',
//     age: 18,
//     foo() {
//         console.log('hello')
//     },
//     foo1() {
//         console.log('bye')
//     },
// }


function objCopy(obj) {
    if (obj) {
        let functionsObjCopy = [];
        for (let item in obj) {
            if (typeof obj[item] === 'function') {
                let functionCopy = obj[item].bind()
                functionsObjCopy.push({functionCopy, item});
            }
        }

        let parseObj = JSON.parse(JSON.stringify(obj));
        for (const func of functionsObjCopy) {
            parseObj[func.item] = func.functionCopy;
        }

        

        return parseObj;

    }
}

console.log(objCopy({
    name: 'danya',
    age: 18,
    foon: function () {
        console.log('hello')
    },
    foon1: function () {
        console.log('bye')
    },
}));


console.log('---------')
// #iz6emEsP2BA
// - є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log( coursesAndDurationArray.map((value, index) => ({...value, id: index + 1})) );






