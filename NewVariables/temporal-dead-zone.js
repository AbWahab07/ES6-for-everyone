// variable declarations are processed before any code is executed, 
// so, declaring a variable anywhere in the code is equivalent to declaring it at the top. 
// This behavior is called "hoisting", 

bla = 2;
var bla;
// ...

// is implicitly understood as:

var bla;
bla = 2;




// Temporal Dead Zone means let/const variable can't be accessed before they are declared

console.log(aVar); // undefined
/*
	This
	area is
	TDZ
*/
// console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;