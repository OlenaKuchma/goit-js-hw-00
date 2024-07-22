
// 1
// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);
// }

// const fnB = function (number) {
//     console.log('Це лог при виклику fnB', number);

// }

// fnA('Message', fnB);

// 2

// const doMath = function (a, b, callback) {
//     const result = callback(a,b);
//     console.log(result);

// }

// const add = function (x, y) {
// return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
//     }

// doMath(2, 3, add);
// doMath(2, 3, sub);

// 3

// const filter = function (arr, test) {
    
//     const filteredArr = [];

//     for (const el of arr) {
//         console.log(el);
//         console.log(test(el));

//         const paset = test(el);
//         if (paset) {
//             filteredArr.push(el);
//         }
//     }

//     return filteredArr;
// }

// const calback1 = function(value) {
//     return value > 3;
// }


// const r1 = filter([1, 2, 4, 3, 5, 7, 11, 5], calback1);
// console.log(r1);

// const r2 = filter([1,44, 4, 3, 22, 7, 33, 5], function(value) { return value <= 4;
    
// });

// або 
// const r2 = filter([1,44, 4, 3, 22, 7, 33, 5], value => value <= 4);


// console.log(r2);

// const fruits = [
//     {name: 'w', quantiti: 10, isFresh: true },
//     {name: 'r', quantiti: 233, isFresh: false},
//     {name: 'g', quantiti: 31, isFresh: true},
//     {name: 'd', quantiti: 500, isFresh: false},
//     {name: 'f', quantiti: 62, isFresh: true},
//     {name: 'v', quantiti: 84, isFresh: false},
// ]

// const getFruitQuantity = function (fruits) {
//     return fruits.quantiti > 200;
// }

// const r3 = filter(fruits, getFruitQuantity);

// або 

// const r3 = filter(fruits, fruits => fruits.quantiti > 200);

// console.table(r3);


// 4

// const fnA = function (parametrs) {
//     const innerVariable = 'Значення внутрішньої змінної функції fnA';
    
//     const innerFunction = function () {
//         console.log(parametrs);
//         console.log(innerVariable);
//         console.log('Виклик функції innerFunction');
//     }

//     return innerFunction;
// }

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// 5


// const makeDish = function (shaffName, dish) {
//     console.log(`Шеф на імя ${shaffName} готує страву ${dish}.`)

// }

// makeDish('Poly', 'cake');
// makeDish('Mango', 'soup');

// const makeShaff = function (name) {
    
//     const makeDish = function (dish) {
//     console.log(`Шеф на імя ${name} готує страву ${dish}.`)

    

// }

// return makeDish;
// }

// const mango = makeShaff('Mango');

// console.dir(mango);

// console.log(mango);

// mango('icecream');
// mango('beef');


// const poly = makeShaff('Poly');

// poly('tea');
// poly('cofee');

// 6

// const salaryManagerFactory = function (employeeName, baseSalary) {

//     let salary = baseSalary;

//     const changeBy = function (amount) {
//         salary += amount;
//     };

//   return {
//     raise(amount) {
//         changeBy(amount);
//     },
//     lower(amount) {
//         changeBy(amount);
    
//     },

//     current () {
//          return `Теперішня зарплата ${employeeName} - ${salary}.`
//     }
//   }

// }
//  const salaryManager = salaryManagerFactory('Mango', 5000);
 
//  console.log(salaryManager.current());


// ------------------------------------
// const myLib = {
//     value123: 0,
//     add(num) {
//         this.value123 += num;
//     },
//     getValue() {
//         return this.value123;
//     }
// };

// myLib.add(5);

// console.log(myLib.getValue());
// ----------------------------------------------------
// const myLibFactory = function () {

//   let value = 0;

//   const add = function (num) {

//     value += num;
    
//   };

//   return {

//     add: add,
//     getValue () {
//       return value;
//     },
//   };
// };

// const myLib = myLibFactory();

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());


// 7

const add = function (a, b, c) {

console.log(a, b, c);

return a+b+c;

}
console.log(add(5,10,12));

// -------------------

const add2 = (a2, b2, c2) => {
  console.log(a2, b2, c2);

return a2+b2+c2;
}
//-------------------
const add5 = (a5, b5, c5) => a5+b5+c5;
//-------------------

console.log(add2(5,10,12));

// -------------------

const add3 = a3 => {
  console.log(a3);

return a3;
};


console.log(add3(5));

// -------------------

const add4 = () => {
  console.log('');
  return 'a4';

};

console.log(add4(77));

// -------------

const addArrow = (...args) => {
  console.log(args);
}

console.log(addArrow());

// -------
const arrowfnA = () => ({arrowA: 4});

console.log(arrowfnA());