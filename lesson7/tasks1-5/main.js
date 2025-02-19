// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let user1 = new User(7, 'kashtan', 'kala', '12142@gmail', '+124326682');
let user2 = new User(2, 'vasya', 'kala', '12142@gmail', '124326682');
let user3 = new User(9, 'kashtan', 'kala', 'sdgsdg@gmail', '2323346');
let user4 = new User(4, 'kashtan', 'katya', '12142@gmail', '124326682');
let user5 = new User(5, 'kola', 'kala', '12142@gmail', '+346346');
let user6 = new User(3, 'kashtan', 'kala', 'sdsdg42@gmail', '124326682');
let user7 = new User(1, 'kashtan', 'kala', '12142@gmail', '124326682');
let user8 = new User(8, 'dana', 'kala', 'fseg@gmail', '124326682');
let user9 = new User(6, 'kashtan', 'kala', '1sdgsdg42@gmail', '346346');
let user10 = new User(10, 'kashtan', 'amalia', '12142@gmail', '124326682');

let arrayOfUsers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

console.log(arrayOfUsers);


console.log('------');
// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let filterArray = arrayOfUsers.filter(function(value) {
    if (value.id % 2 === 0) {
        return value;
    }
})

console.log(filterArray);


console.log('------------');
// #pOeHKct
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArray = arrayOfUsers.sort((a, b) => a.id - b.id)

console.log(sortArray);



console.log('------');
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id1, name1, surname1, email1, phone1, order) {
    this.id1 = id1;
    this.name1 = name1;
    this.surname1 = surname1;
    this.email1 = email1;
    this.phone1 = phone1;
    this.order = order;

}

let client1 = new Client(7, 'kashtan', 'kala', '12142@gmail', '+124326682', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}, {title: 'cucumber', price: '20'}]);
let client2 = new Client(2, 'vasya', 'kala', '12142@gmail', '124326682', [{title: 'apple', price: '10'}]);
let client3 = new Client(9, 'kashtan', 'kala', 'sdgsdg@gmail', '2323346', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}, {title: 'cucumber', price: '20'}, {title: 'cucumber', price: '20'}]);
let client4 = new Client(4, 'kashtan', 'katya', '12142@gmail', '124326682', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}, {title: 'cucumber', price: '20'}]);
let client5 = new Client(5, 'kola', 'kala', '12142@gmail', '+346346', [{title: 'apple', price: '10'}]);
let client6 = new Client(3, 'kashtan', 'kala', 'sdsdg42@gmail', '124326682', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}]);
let client7 = new Client(1, 'kashtan', 'kala', '12142@gmail', '124326682', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}, {title: 'cucumber', price: '20'}, {title: 'cucumber', price: '20'}, {title: 'cucumber', price: '20'}, {title: 'cucumber', price: '20'}]);
let client8 = new Client(8, 'dana', 'kala', 'fseg@gmail', '124326682', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}]);
let client9 = new Client(6, 'kashtan', 'kala', '1sdgsdg42@gmail', '346346', [{title: 'apple', price: '10'}, {title: 'cucumber', price: '20'}, {title: 'iphone', price: '30'}, {title: 'cucumber', price: '20'}]);
let client10 = new Client(10, 'kashtan', 'amalia', '12142@gmail', '124326682', [{title: 'apple', price: '10'}, {title: 'iphone', price: '30'}]);

let arrayOfClient = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

console.log(arrayOfClient);




console.log('------------');
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = arrayOfClient.sort((a, b) => a.order.length - b.order.length)

console.log(sortClient)





