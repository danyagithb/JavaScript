let divContainer = document.createElement('div');
document.body.appendChild(divContainer);

// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

let div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

let cloneDiv= div.cloneNode(true);

divContainer.append(div, cloneDiv);



// #OPLI89c9G
// – Є масив:
// [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let array = ['Main', 'Products', 'About', 'Contacts'];

let ul = document.createElement('ul');
divContainer.appendChild(ul);

for (const arrayItem of array) {
    let li = document.createElement('li');
    li.innerText = arrayItem;
    ul.appendChild(li);

}




// #jeBqHV525U5
// – Є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let divBlockCourses = document.createElement('div');
divContainer.appendChild(divBlockCourses);

for (const itemObj of coursesAndDurationArray) {
    let divItemCourses = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = itemObj.title;
    let text = document.createElement('p');
    text.innerText = 'monthDuration: ' + itemObj.monthDuration

    divBlockCourses.appendChild(divItemCourses);
    divItemCourses.append(h2, text);
}




// #Kx1xgoKy8
// – Є масив
// let coursesAndDurationArray = [
//      {title: ‘JavaScript Complex’, monthDuration: 5},
//      {title: ‘Java Complex’, monthDuration: 6},
//      {title: ‘Python Complex’, monthDuration: 6},
//      {title: ‘QA Complex’, monthDuration: 4},
//      {title: ‘FullStack’, monthDuration: 7},
//      {title: ‘Frontend’, monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

let divBlockCourses2 = document.createElement('div');
divContainer.appendChild(divBlockCourses2);

for (const itemObj2 of coursesAndDurationArray) {
    let divItemCourses2 = document.createElement('div');

    let title = document.createElement('h1');
    title.innerText = itemObj2.title;
    title.classList.add('heading');

    let description = document.createElement('p');
    description.innerText = 'monthDuration: ' + itemObj2.monthDuration;
    description.classList.add('description');

    divBlockCourses2.appendChild(divItemCourses2);
    divItemCourses2.append(title, description);
}





