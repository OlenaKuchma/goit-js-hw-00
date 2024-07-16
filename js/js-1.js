
// 1
//  let base = prompt("Давай число");
//  base = Number(base);
//  console.log(base);

//  let power = prompt("Давай степінь");
//  power = Number(power);
//  console.log(power);

//  let result = base ** power;
//  console.log(result);
 

// 2
// const max = 9;
// const min = 2;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// 3
// const balance = 1000;
// const message = balance >= 0 ? "Позитивний баланс" : "Негативний баланс";
// console.log(message);

// 4
//  const stars = 3;
//  let price;
// // 4/1
// //  if (stars === 1) 
// //  {price = 20;}
// //  else if (stars === 2) 
// //  {price = 30;}
// //  else if (stars === 3) 
// //  {price = 40;}
// //  else if (stars === 4) 
// //  {price = 50;}
// //  else if (stars === 5) 
// //  {price = 60;}
// //  else {console.log("Такої кількості зірок нема");}
// // console.log("Ціна", price);

// // 4/2
// //  if (stars === 1 || stars === 2) 
// //  {price = 20;}
// //  //  else if (stars === 3 || stars === 4) 
// //  {price = 40;}
// //  //  else if (stars === 5) 
// //  {price = 60;}
// //  else {console.log("Такої кількості зірок нема");}
// // console.log("Ціна", price);

// // 4/3
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;    
//     case 3:
//         price = 40;
//         break;
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 60;
//         break;

//         default:
//             console.log("Такої кількості зірок нема");
// }
// console.log("Ціна", price);

// // 4/4
// switch (stars) {
//     case 1:
//     case 2:
//         price = 30;
//         break;    
//     case 3:
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 60;
//         break;

//         default:
//             console.log("Такої кількості зірок нема");
// }
// console.log("Ціна", price);


// 5
// const minSalery = 500;
// const maxSalery = 5000;
// const employees = 4;
// let totalSalery = 0; 

// for (let i = 1; i <= 4; i += 1) {
// const salery = Math.round(Math.random() * (maxSalery - minSalery) + minSalery);
// console.log(`ЗП працівника ${i} - ${salery}`);

// totalSalery += salery;
    
// }
// console.log(`ЗП загальна - ${totalSalery}`);

// 5/1

// const min = 6;
// const max = 20;
// let total = 0;

// for (let i = min; i < max; i += 1) {
//     console.log(i);

//     if (i % 2 !== 0) {
//         console.log('непарне', i)
//         continue;}
    
         
//     console.log('парне', i)
//     total += i;
// }
 
        
// console.log('сума парних', total)

// 5/2
// let balance = 10000;
// const payment = 12000;

// console.log(`Загальна сума покупки складає ${payment}. Перевіряємо доступний баланс на карті.`)

// if (payment <= balance) {
//     console.log('Ok');

//     balance -= payment;
//     console.log(`На рахунку залишилось ${balance} коштів.`);
// } else {
//     console.log(`На рахунку не достатньо коштів.`);
// }

// 5/3
const totalSpent = 3000;
let payment = 500;
let discount = 0;


if (totalSpent <100) {
    console.log(`Ви не партнер. Знижка 0%.`);
}

else if(totalSpent >= 100 && totalSpent < 1000)  {
    console.log(`Бронзовий партнер. Знижка 2%.`);
    discount = 0.02;
    
} else if (totalSpent >= 1000 && totalSpent < 5000)  {
    console.log(`Срібний партнер. Знижка 5%.`);
    discount = 0.05;
}
    else {
        console.log(`Золотий партнер. Знижка 10%.`);
    discount = 0.1;
}
    
console.log(`Офорляємо замовлення на суму ${payment} зі знижкою ${discount * 100}`)
