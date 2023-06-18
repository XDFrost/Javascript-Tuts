// Push, Pop, Shift, Unshift



let fruits = ["Apple", "Mango", "Melon"];
console.log(fruits);


// push
// - Adds an element at the end of array

fruits.push("Banana");
console.log(fruits);


// pop
// - Removes the last element and also returns it

let popped = fruits.pop();
console.log("Popped fruit is: ", popped);
console.log(fruits);


// unshift
// - Adds an elements at start

fruits.unshift("Kivy");
console.log(fruits);


// shift
//- Removes and return the element from start

let remove = fruits.shift();
console.log(remove);
console.log(fruits);



// Push and Pop are faster tha Shift and Unshift

