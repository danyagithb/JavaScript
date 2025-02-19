// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, creator, year, maxSpeed, motor) {
    this.model = model;
    this.creator = creator;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.motor = motor;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        for (const item in this) {
            console.log(item, this[item])
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newYear) {
        this.year = newYear;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Car('Tesla', 'Ilon Mask', 2000, 250, 'electric')

// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2011);
// car.addDriver({name: 'danya', age: 18});
console.log(car);




console.log('----------')
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {

    constructor(model, creator, year, maxSpeed, motor) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.motor = motor;
    }

    drive1 = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info1 = function () {
        for (const item in this) {
            console.log(item, this[item])
        }
    };
    increaseMaxSpeed1 = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear1 = function (newYear) {
        this.year = newYear;
    };
    addDriver1 = function (driver) {
        this.driver = driver;
    }

}


let car1 = new Car1('BMW', 'German', 1920, 350, '2.0')
// car1.drive1();
// car1.info1();
// car1.increaseMaxSpeed1(100);
// car1.changeYear1(1950);
// car1.addDriver1({name: 'danya', age: 18});
console.log(car1);

