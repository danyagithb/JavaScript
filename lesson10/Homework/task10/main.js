// #NKB0tgWIK1G
// ***PAGINATION

// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантажені сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

// const items = Array.from({ length: 100 }, (_, i) => `Об'єкт ${i + 1}`);
// const itemsPerPage = 10;
// let currentPage = 1;
//
// const itemList = document.getElementById('box');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
//
//
// function renderItems() {
//     itemList.innerHTML = '';
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = currentPage * itemsPerPage;
//     const visibleItems = items.slice(start, end);
//
//     visibleItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item;
//         itemList.appendChild(listItem);
//     });
//
//     prevButton.disabled = currentPage === 1;
//     nextButton.disabled = currentPage === Math.ceil(items.length / itemsPerPage);
// }
//
// prevButton.onclick = function () {
//     if (currentPage > 1) {
//         currentPage--;
//         renderItems();
//     }
// };
//
// nextButton.onclick = function () {
//     if (currentPage < Math.ceil(items.length / itemsPerPage)) {
//         currentPage++;
//         renderItems();
//     }
// }
//
//
// renderItems()

// const items = Array.from({ length: 100 }, (_, i) => `Об'єкт ${i + 1}`);
// const itemsPerPage = 10;
// let currentPage = 1;
//
// const itemList = document.getElementById('box');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
//
// function renderItems() {
//     itemList.innerHTML = '';
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = currentPage * itemsPerPage;
//     const visibleItems = items.slice(start, end);
//
//     visibleItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item;
//         itemList.appendChild(listItem);
//     });
//
//     prevButton.disabled = currentPage === 1;
//     nextButton.disabled = currentPage === Math.ceil(items.length / itemsPerPage);
// }
//
// prevButton.onclick = function () {
//     if (currentPage > 1) {
//         currentPage--;
//         renderItems();
//     }
// };
//
// nextButton.onclick = function () {
//     if (currentPage < Math.ceil(items.length / itemsPerPage)) {
//         currentPage++;
//         renderItems();
//     }
// }
//
// // Перший рендеринг
// renderItems();


const items = Array.from(
    {length: 100},
    (_, i) => ({text: `item ${i + 1}`})
);

const boxContainer = document.getElementById('box');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPage = 1;
const itemsForPage = 10;


function sortItems() {
    boxContainer.innerHTML = '';
    let start = (currentPage - 1) * itemsForPage;
    let end = start + itemsForPage;
    let itemsSlice = items.slice(start, end);

    itemsSlice.forEach(item => {
        let liForItem = document.createElement('li');
        liForItem.innerText = item.text;
        boxContainer.appendChild(liForItem);
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === 10;
}

prevButton.onclick = function () {
    if (currentPage > 1) {
        currentPage--;
        sortItems()
    }
};

nextButton.onclick = function () {
    if (currentPage < 10) {
        currentPage++;
        sortItems();
    }
}



sortItems()