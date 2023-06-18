// Primitive vs Reference Data types



// Primitive type
// - Stored in stacks
// - Changes are not inflicted on each other in this case because memory addresses are different

let num1 = 6;
let num2 = num1;

console.log("Value of num1 is:", num1);
console.log("Value of num2 is:", num2);

num1++;
console.log("After incrementing num1");

console.log("Value of num1 is:", num1);
console.log("Value of num2 is:", num2);



// Reference type
// - Stored in heap
// - Changes are inflicted on each other in this case because memory address is same

let array1 = ["Item1", "Item2"];
let array2 = array1;

console.log("Array1:", array1);
console.log("Array2:", array2);

array1.push("Item3");
console.log("After pushing the element");

console.log("Array1:", array1);
console.log("Array2:", array2);
