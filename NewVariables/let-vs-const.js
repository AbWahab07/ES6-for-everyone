
// var Variable can be updated and re-defined
var width = 200;
console.log(width); // 200
var width = 300; // [JS is not yelling at you for re-defined the same variable in the same scope]
console.log(width); // 300  


// let Variable can be updated but can not be re-defined within the same scope
let height = 200;
console.log(height); // 200
// let height = 300; // SyntaxError: Identifier 'height' has already been declared
console.log(height); 


// const Variable can't be updated and can't be redefined within the same scope
const area = 400;
console.log(area);
// area = 500; // TypeError: Assignment to constant variable.
// const area = 500; // SyntaxError: Identifier 'area' has already been declared
console.log(area);


/* Varaible Scoping */

// var is function scoped
// let and const are block scoped


// const can't be changed, however, propeties inside a const object can change
const person = {
	name: 'abdul',
	age: 20
};
console.log(person); // { name: 'abdul', age: 20 }
/*person = { // TypeError: Assignment to constant variable.
	name: 'wahab',
	age: 20
};
*/
person.name = 'Ab';
console.log(person); // { name: 'Ab', age: 20 }
// To avoid this we can use freeze()
const ab = Object.freeze(person);
ab.name = 'Abdul';
console.log(ab); // { name: 'Ab', age: 20 } [name isn't updated to Abdul]




