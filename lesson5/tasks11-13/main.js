// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) ->13

let sum = (arr) => {

    let result = 0;
    for (const arrItem of arr) {
        result += arrItem // iter 1 = 1, iter 2 = 1 + 2
    }
    console.log(result)
}

sum([1,2,3,4,5,6,7]);

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) ==> [22,11,33,44]

let swap = (arr1,index1,index2) => {

    if (index1 < arr1.length && index2 < arr1.length) {
        let value = arr1[index1]
        arr1[index1] = arr1[index2]
        arr1[index2] = value

        console.log(arr1)

    }

}
swap([11,22,33,44],0,1)



// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {

    for (let itemExchange of currencyValues) {
        if (itemExchange.currency === exchangeCurrency) {
            console.log( sumUAH / itemExchange.value )
        }
    }

}

exchange(42000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR');