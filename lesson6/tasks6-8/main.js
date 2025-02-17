// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];

let mappedArr = arr.map(value => {
    return value.toString()
})

console.log(mappedArr)



console.log('--------');
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]



function sortNums(array, direction) {
    if (direction === 'ascending') {
        return nums.sort((num1, num2) => num1 - num2) // 21-11 > 0, то num2, то есть 11 идет на 1 место
    }

    if (direction === 'descending') {
        return nums.sort((num1, num2) => num2 - num1) // 11-21 < 0, то num1, то есть 21 идет на 1 место
    }

}

let nums = [11, 21, 3, 12, 35, 23, 33];
console.log(sortNums(nums, 'descending'));




console.log('--------');
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)

// let filter = sort.filter(value => value.monthDuration > 5)

let mappedArray =
    coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(mappedArray)

