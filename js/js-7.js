// const oBjC = {
//   z: 5,
// };

// console.log("oBjC", oBjC);

// console.log(oBjC.hasOwnProperty("z"));

// const oBjB = Object.create(oBjC);
// oBjB.y = 7;

// console.log("oBjB", oBjB);

// console.log(oBjB.hasOwnProperty("z"));
// console.log(oBjB.hasOwnProperty("y"));

// const oBjA = Object.create(oBjB);
// oBjA.x = 1;
// console.log("oBjA", oBjA);

// const oBjT = Object.create({ d: 8 });
// oBjT.f = 7;

// console.log("oBjT", oBjT);

// ----------------- fu Constructor

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// console.log("Car", Car);

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// const myCar = new Car({ brand: "Audi", model: "Q3", price: 35000 });

// myCar.changePrice(100000);

// console.log("myCar", myCar);

// const myCar2 = new Car({ brand: "Mazda", model: "cx5", price: 8000 });

// console.log("myCar2", myCar2);

// const myCar3 = new Car({ brand: "BMW", model: "x6", price: 80000 });

// console.log("myCar3", myCar3);

// -----------------

// const User = function ({ name, mail, pasword } = {}) {
//   this.name = name;
//   this.mail = mail;
//   this.pasword = pasword;
// };

// User.prototype.changeUserPasword = function (newPasword) {
//   this.pasword = newPasword;
// };

// console.log("User", User);
// console.log(User.prototype);

// const mango = new User({
//   name: "Mango",
//   mail: "mango@gmail.com",
//   pasword: "egvbgfbcv",
// });

// console.log(mango);

// mango.changeUserPasword("xxxxxx");
// console.log(mango);

// User.message = "Im static property of User";

// User.LogInfo = function (obj) {
//   console.log(obj);
//   console.log(obj.name);
//   console.log(obj.mail);
//   console.log(obj.pasword);
// };

// User.LogInfo(mango);

// // ---------------------
// // const oBjA = {
// //   a: 3,
// // };
// // console.log(oBjA.__proto__ === Object.prototype);

// -----------------

class Car1 {
  static description = "Клас, що описує авто";

  static LogInfo(carObj) {
    console.log("Car1.logInfo -> carObj", carObj);
  }

  constructor({ brand, model, price } = {}) {
    console.log(this);
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updatemodel(newModal) {
    this.model = newModal;
  }
}

console.log(Car1);

const myNewCar = new Car1({ brand: "Audi", model: "Q3", price: 35000 });

console.log(myNewCar);

myNewCar.changePrice(123456);
myNewCar.updatemodel("A7");

console.log(myNewCar);

Car1.LogInfo(myNewCar);
