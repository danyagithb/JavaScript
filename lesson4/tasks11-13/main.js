// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) ->13

function sum(arr) {

   let result = 0;
   for (const arrItem of arr) {
        result += arrItem // iter 1 = 1, iter 2 = 1 + 2
   }

   return result
}

console.log(sum([1,2,3,4,5,6,7]))

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) ==> [22,11,33,44]

function swap(arr,index1,index2) {

    if (index1 < arr.length && index2 < arr.length) {
        let value = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = value

        return arr;

    }
    return '----'

}

console.log(swap([11,22,33,44],0,2))



// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency) {

    let chooseValue
    for (let itemExchange of currencyValues) {
        if (itemExchange.currency === exchangeCurrency) {
            chooseValue = itemExchange

            return sumUAH / chooseValue.value
        }
    }

}

console.log( exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR') )