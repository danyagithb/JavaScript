// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд – нічого не відбувається

document.addEventListener('DOMContentLoaded',  () => {
    let priceKey = 'price';
    let lastTimeKey = 'lastTime';

    let currentTime = new Date().getTime();

    let price = +localStorage.getItem(priceKey) || 100;
    let lastTime = +localStorage.getItem(lastTimeKey) || 0;

    if (currentTime - lastTime > 10000) {
        price += 10;
        localStorage.setItem(priceKey, price);
        localStorage.setItem(lastTimeKey, currentTime);
    }

    let div = document.createElement('div');
    div.innerText = price;
    document.body.appendChild(div)
})