// Object destructuring help you break down an object/array into variables

const alphabet  = ['A', 'B', 'C', 'D', 'E']

const [a,, c, ...rest] = alphabet
console.log([a,, c, ...rest]);

