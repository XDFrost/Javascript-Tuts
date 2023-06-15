//undefined

// - When we don't assign any value to the variable, it's type becomes undefined
// - const can't have undefined type

let firstname;                             // firstname is undefined type because we haven't assigned anything to it
console.log(typeof(firstname));
firstname = "Pratham";
console.log(typeof(firstname));            // firstname is now type string because a string is stored in it




// null

// - Means Empty
// - null id of type object (reference data type)

let myVar = null;
console.log(myVar);

console.log(typeof(null));




// BigInt
// If storing number is greater than max_safe_integer, we'll use BigInt to store it

console.log(Number.MAX_SAFE_INTEGER);             // Tells the maximum integer we can store safely 

let myNum1 = 123;

let myNum2 = BigInt(123567546786545676545678765678);
let myNum3 = 123567546786545676545678765678n;
// console.log(myNum);
console.log(typeof myNum2);
console.log(typeof myNum3);


// Methods to convert a number into bigint:

        // 1. let variable_name = BigInt(number)
        // 2. let variable_name = (number)n

// console.log(myNum1+myNum2);                     // Gives error because we can't add bigint to int
