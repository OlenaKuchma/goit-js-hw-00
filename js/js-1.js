
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
 const stars = 3;
 let price;

//  if (stars === 1) 
//  {price = 20;
//     console.log("Ціна", price);}
//  else if (stars === 2) 
//  {price = 30;
//     console.log("Ціна", price);}
//  else if (stars === 3) 
//  {price = 40;
//     console.log("Ціна", price);}
//  else if (stars === 4) 
//  {price = 50;
//     console.log("Ціна", price);}
//  else if (stars === 5) 
//  {price = 60;
//     console.log("Ціна", price);}

//  else {console.log("Такої кількості зірок нема");}

switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
        price = 30;
        break;    
    case 3:
        price = 40;
        break;
    case 4:
        price = 50;
        break;
    case 5:
        price = 60;
        break;

        default:
            console.log("Такої кількості зірок нема");
}
console.log("Ціна", price);

 



