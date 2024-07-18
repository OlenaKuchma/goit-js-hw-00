
// 1/1
// const friends = ['Mango', 'Poli', 'Kiwi', 'Ajax'];

// console.table(friends);

// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1'

//     console.table(friends[i]);

// }
// 1/2
// for (let friend of friends) {
//     friend += '-1';
// }
// console.table(friends);

// 2

// const cart = [50, 71, 80, 123, 150, 340, 7, 8, 9, 10];

// let total = 0;

// for (let i = 0; i < cart.length; i +=1) {

//     total += cart[i]

// }

// або


// for (let value of cart) {
//     total += value;
// }

// console.log(total);

// for (let i = 0; i < cart.length; i += 1) {

//     if (cart[i] % 2 !== 0) {
//         continue;
//     } else {
//         total += cart[i];
//     }

// }

// for (const value of cart) {
//     if (value % 2 === 0) {
//         total += value;
//     } 
// }
// або 
// for (const value of cart) {
//     if (value % 2 !== 0) {
//         continue;
//     } 

//     total += value;
// }

//  console.log(total);

// 3

// const logins = ['ruruyryfhh', 'gqwqihxdkhnc', 'UTvhujYTYUJbg', 'JGI^Fvjku*'];
// const loginTofind = 'UTvhujYTYUJbg';
// let message = '';

// 3/1
// for (let i = 0; i < logins.length; i +=1) {
//     let login = logins[i];

//    if (login === loginTofind) {
//     message = `Користувач ${loginTofind} знайдений.`;
//     break;
//    }
//    message = `Користувач ${loginTofind} не знайдений.`;
// }

// 3/2
// for (let login of logins) {
//     if (login === loginTofind) {
//         message = `Користувач ${loginTofind} знайдений.`;
//         break;
//     } 
//     message = `Користувач ${loginTofind} не знайдений.`;

// }

// 3/3 
// message = logins.includes(loginTofind) ? `Користувач ${loginTofind} знайдений.` : `Користувач ${loginTofind} не знайдений.`;

// console.log(message);

// 4
// const numbers = [50, 71, 80, 123, 150, 340, 7, 8, 9, 10];

// let smallerNumber = numbers[0];

// for (let number of numbers) {

//     if (number < smallerNumber) {
//         smallerNumber = number;
//     }
// }

// console.log(smallerNumber);

// 5

// const friends = ['Mango', 'Poli', 'Kiwi', 'Ajax'];
// console.log(friends);

// const newFriends = friends.join(',');

// console.log(newFriends);

// 6

// const string = "JavaScript";
// const letters = string.split('');
// let newString = '';

// console.log(letters);

// for (const letter of letters) {
//     newString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();

// }

// console.log(newString);

// 6/1
// const string = "JavaScript is a computer program";
// console.log(string);

// const newString = string.toLowerCase().split(' ').join('-');
// console.log(newString);

// 6/2
// const arr1 = [3, 7, 8, 9];
// const arr2 = [88, 96, 34, 777, 99];
// let total = 0;

// const allArr = arr1.concat(arr2);
// for (const arr of allArr) {
//     total += arr; 
// }
// console.log(allArr);
// console.log(total);

// 7
// const carts = ['cart - 1', 'cart - 2', 'cart - 3', 'cart - 4', 'cart - 5']
// const cartToRemove = 'cart - 3';
// const cartToInput ='cart - 6';

// const i = carts.indexOf(cartToRemove);

// carts.splice(i, 1)

// carts.push(cartToInput);

// carts.splice(0, 0, cartToInput)

// console.log(i);
// console.log(carts);

// 8 function
// const add = function  (x, y) {
//     console.log(x);
//     console.log(y);

//     const result = x + y;

//     console.log('Виконується фунція add');


//     return result;
// }
// const r1 = add(5, 9);
// console.log("r1", r1);

// const fnA = function (params) {
//     console.log('Виконується фунція fnA');
// }
// fnA();
// const fnB = function (params) {
//     console.log('Виконується фунція fnB');
// }
// fnB();
// const fnC = function (params) {
//     console.log('Виконується фунція fnC');
// }
// fnC();


// 9

// const calculateTotalPrice = function (items) {
//     console.log("items", items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;

// }

// console.log(calculateTotalPrice([30, 69, 70]));
// console.log(calculateTotalPrice([33, 70, 89, 40]));
// console.log(calculateTotalPrice([311, 256, 878, 900, 33]));


// 10

// const logins = ['ruruyryfhh', 'gqwqihxdkhnc', 'UTvhujYTYUJbg', 'JGI^Fvjku*'];


// const findLogin = function (allLogins, loginTofind) {

//     return allLogins.includes(loginTofind) ? `Користувач ${loginTofind} знайдений.` :
//         `Користувач ${loginTofind} не знайдений.`;


// }

// console.log(findLogin(logins, 'ruruyryfhh'));
// console.log(findLogin(logins, 'gqwqihxdkhnc'));
// console.log(findLogin(logins, 'TvhujYTYUJbg'));
// console.log(findLogin(logins, 'JGI^Fvjku*'));

// 11

// const smallerN = function (numbers) {
//     let smallerNumber = numbers[0];

//     for (let number of numbers) {
        
//         if (number < smallerNumber) {
//             smallerNumber = number;
//         }
//         }
//     return smallerNumber;
    
// }

// console.log(smallerN([50, 71, 80, 123, 150, 340, 7, 8, 9, 10]));
// console.log(smallerN([50, 71, 1, 123, 3, 340, 0, 8, 9, 10]));
// console.log(smallerN([50, 10000, 123, 150, 340, 1, 55, 9, 10]));


// 12

// const chengeString = function (string) {

//     const letters = string.split('');
//     let newString = '';

//     for (const letter of letters) {
//         newString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// return newString;
// }

// console.log(chengeString('JavaScript'));
// console.log(chengeString('CUYcyhcvhv'));
// console.log(chengeString('KIINK Bnj jgbu'));
// console.log(chengeString('vvbjbugGYYYY'));

// 13

// const slugify = function (string) {
   
// return string.toLowerCase().split(' ').join('-');
    
// }

// console.log(slugify("cyvhb i  kesb ns kkki nhod o"));
// console.log(slugify("jw bcj c wkfcheif efe"));

// 14

// const add = function (...args) {
//    let total = 0;
//    for (const arg of args) {
//     total += arg;
//    }
   
//     return total;
    
// }

// console.log(add(3, 5, 8));
// console.log(add(88, 99, 103, 44, 55));


// 14/1

// const fn = function (a,b,c, ...args) {
//     console.log(`${a}, ${b}, ${c}`);
//     console.log(args);
// }

// fn("word", 3, 5, 8, 9, 11, 55, 22);
// fn('live', 'day', 88, 99, 103, 44, 55);

// 14/2

// const filterNumbers = function (arr, ...args) {
//    console.log(arr);
//    console.log(args);

//    for (const element of arr) {
//     let newArr = [];
//             if (args.includes(element)) {
//             newArr.push(element);
            
//     }
//     return newArr;
//    }
   
// }

// console.log(filterNumbers([3, 5, 2, 1, 7, 55], 9, 33, 2, 3, 55, 68, 24));
// console.log(filterNumbers([3, 5, 55], 9, 3, 55, 33, 68, 24));