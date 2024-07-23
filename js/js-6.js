
// різні комірки памяті

console.log('[] === []', [] === []);

console.log('{} === {}', {} === {});

console.log(' function() {} === function() {}', function() {} === function() {} );



// посилання на той самий обєкт

const fnA = function () {};

const fnB = fnA;

console.log( 'fnA === fnB', fnA === fnB); 