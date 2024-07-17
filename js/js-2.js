
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
const carts = ['cart - 1', 'cart - 2', 'cart - 3', 'cart - 4', 'cart - 5']
const cartToRemove = 'cart - 3';
const cartToInput ='cart - 6';

const i = carts.indexOf(cartToRemove);

carts.splice(i, 1)

carts.push(cartToInput);

console.log(i);
console.log(carts);