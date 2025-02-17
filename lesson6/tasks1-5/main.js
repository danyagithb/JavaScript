// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

let strings = [string1, string2, string3];
for (const string of strings) {
    console.log(string.length);
}



console.log('-----------')
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

for (const string of strings) {
    console.log(string.toUpperCase());
}


console.log('-----------')
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let s1 = 'HELLO WORLD';
let s2 = 'LOREM IPSUM';
let s3 = 'JAVASCRIPT IS COOL';

let sArr = [s1, s2, s3];
for (const s of sArr) {
    console.log(s.toLowerCase());
}



console.log('-----------')
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

console.log(str.trim());


console.log('-----------')
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str1) {
    if (str1) {
        let split = str1.split(' ')
        return split
    } else {
        return 'Error'
    }


}
console.log(stringToarray('Ревуть воли як ясла повні'));



