// Stack, Heap

// Stack => Used in primitive types
// Heap => Ussd in non-primitive types

// Stack provides a copy but heap provides a reference

let x = "XDFrost"       // STored in stack because it is primitive
let x_2 = x

console.log("Before Assignment");
console.log("x = " + x);
console.log("x_2 = " + x_2);

console.log("After Assignment");
x_2 = "name_2"
console.log("x = " + x);
console.log("x_2 = " + x_2);
console.log();

// Here, copy of x is made, x is not getting used, so its value isn't changing

let user_one = {
    email : "xyz@gmail.com",
    upi : "xyz@paytm"
}

let user_two = user_one
user_two.email = "changed@gmail.com"

console.log(user_one.email);
console.log(user_two.email);

// Here user_one value is also getting changed because the memory is referenced 
 