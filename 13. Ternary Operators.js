// Ternary Operators
// - Also called conditional operator
// Used to select the code based on the given condition  
// Syntax:

        // let variable_name = value_1 condition value_2 ? execute if true : execute if false
 


// Method 1: (Without using ternary operator)

let age = 18;
let drink;

if(age>15) {
drink = "Coffee";
}
else {
    drink = "milk";
}

console.log(drink);




// Method 2: (With using ternary operator)

let age_ = 8;
let drink_ = age_>= 15 ? "coffee" : "milk";

console.log(drink_);
