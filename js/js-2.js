
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

const cart = [50, 71, 80, 123, 150, 340, 7, 8, 9, 10];

let total = 0;

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

const logins = ['ruruyryfhh', 'gqwqihxdkhnc', 'UTvhujYTYUJbg', 'JGI^Fvjku*'];
const loginTofind = 'UTvhujYTYUJbg';
let message = '';

3/1
// for (let i = 0; i < logins.length; i +=1) {
//     let login = logins[i];

//    if (login === loginTofind) {
//     message = `Користувач ${loginTofind} знайдений.`;
//     break;
//    }
//    message = `Користувач ${loginTofind} не знайдений.`;
// }

3/2
// for (let login of logins) {
//     if (login === loginTofind) {
//         message = `Користувач ${loginTofind} знайдений.`;
//         break;
//     } 
//     message = `Користувач ${loginTofind} не знайдений.`;
    
// }

3/3 
message = logins.includes(loginTofind) ? `Користувач ${loginTofind} знайдений.` : `Користувач ${loginTofind} не знайдений.`;

console.log(message);