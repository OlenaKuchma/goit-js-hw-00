// // різні комірки памяті

// console.log('[] === []', [] === []);

// console.log('{} === {}', {} === {});

// console.log(' function() {} === function() {}', function() {} === function() {} );

// // посилання на той самий обєкт

// const fnA = function () {};

// const fnB = fnA;

// console.log( 'fnA === fnB', fnA === fnB);

// ----------------------------------------

// const user = {
// name: 'Mango',
// showTag() {
//     console.log('showTag -> this', this )
// },

// };

// user.showTag();

// const foo = function () {

//     console.log('foo -> this', this )
// };

// foo();

// --------------------------!!!!!

// const showTag = function () {

//     console.log('showTag -> this', this );
//     console.log('showTag -> this.tag', this.tag );

// };

// // showTag();

// const user = {
//     tag: 'Mango',

//     };

// user.showUserTag = showTag;

// console.log('user', user);

// user.showUserTag();

// -------------------undefind.....

// const user = {
//     tag: 'Mango',
//     showUserTag () {

//         console.log('showTag -> this', this );
//         console.log('showTag -> this.tag', this.tag );

//     },

//     };

//     user.showUserTag();

//     const outshowUserTag = user.showUserTag;

//     outshowUserTag();

// const invokeEction = function (action) {
//     console.log(action);

//     action();

// };

// invokeEction(user.showUserTag);

// ---------------------------------

// const makeChengeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);

//     };

//     const sweater = {
//         color:  'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red');

//     return sweater.updateColor;
// };

// const swapColor = makeChengeColor();

// swapColor('blue');

// --------------------

// const makeChengeColor = function () {
//         const changeColor = function (color) {
//             console.log('changeColor -> this', this);

//         };
//         return changeColor;
//     };

//     const updateColor = makeChengeColor();

//     updateColor('yellow');

//     const hat = {

//         color: 'blue',
//         updateColor,
//     };

//     console.log(hat.updateColor);

//     hat.updateColor('orange');

//     console.log(hat.color);

// ----------

// const counter = {
//   value: 0,

//   increment(value) {
//     console.log("increment -> this", this), (this.value += value);
//   },

//   decrement(value) {
//     console.log("decrement -> this", this), (this.value -= value);
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

//-----------------

const showThis = function (a, b, c) {
  console.log("showThis -> this", this);
  console.log(a, b, c);
};

showThis();
console.dir(showThis);

const oBjA = {
  a: 1,
  b: 2,
};

showThis.call(oBjA, 2, 5, 7);
showThis.apply(oBjA, [2, 5, 7]);

const oBjB = {
  a: 1111,
  b: 24444,
};

showThis.call(oBjB, 2, 5, 7);

const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

changeColor.call(hat, "orange");
console.log(hat);

const sweater = {
  color: "white",
};

changeColor.apply(sweater, ["olive"]);
console.log(sweater);
