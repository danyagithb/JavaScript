// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let arr = []

let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']

for (const suit of suits) {
    for (const value of values) {
        let card = {cardSuit: suit, cardValue: value};

        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red'
        } else {
            card.color = 'black'
        }

        arr.push(card)
    }
}
console.log(arr)

console.log(arr.find(card => card.cardValue === 'ace' && card.cardSuit === 'spade'));

console.log(arr.filter(card => card.cardValue === '6'));

console.log(arr.filter(card => card.color === 'red'));

console.log(arr.filter(card => card.cardSuit === 'diamond'));

console.log(arr.filter(card => card.cardSuit === 'clubs' && card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9'));


console.log('--------')
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }



let reduce = arr.reduce((accum, card) => {

    if (card.cardSuit === 'spade') {
        accum.spades.push(card)
    } else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        accum.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        accum.clubs.push(card)
    }

    return accum;

}, {spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(reduce)


console.log('-------')
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(value => {
    return value.modules.includes('sass')
}));

console.log(coursesArray.filter(value => {
    return value.modules.includes('docker')
}));





