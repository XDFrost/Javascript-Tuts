// ARRAY DESTRUCTURING



const myarr = ["value1", "value2", "value3", "value4"];

let[myvar1, myvar2, ...myNewArray] = myarr;                // myvar1 and myvar2 contains the values assigned to myvar at 0th and 1st index; ...myNewArray acts as spread operator and stored the rest of the unassigned values

// myvar1 = "New value";                    // Since myvar1 and myvar2 are noraml variables, operations can be applied upon them

console.log(myvar1);
console.log(myvar2);
console.log(myNewArray);
