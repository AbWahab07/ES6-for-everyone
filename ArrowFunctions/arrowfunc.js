// Arrow functions are always Anonymous
// this binding is not available
// implict return statement
// you can write functions in one line

const names = ['wes', 'ab', 'df'];
const fullNames = names.map( name => `${name} bos` );
console.log(fullNames); // [ 'wes bos', 'ab bos', 'df bos' ]


// Examples

const race = '100m Dash';
const players = ['Abdul', 'Ali', 'Bilal'];


// Implictly returns an object using  ({name: player, race, place: i+1})
const result = players.map((player, i) => ({ name: player, race, place: i+1}));
console.log(result); // [ { name: 'Abdul', race: '100m Dash', place: 1 }, { name: 'Ali', race: '100m Dash', place: 2 }, { name: 'Bilal', race: '100m Dash', place: 3 } ]


const ages = [40,50,60,30,92,85,96];
const old = ages.filter(age => age >= 50);
console.log(old); // [ 50, 60, 92, 85, 96 ]



