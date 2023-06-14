// typeof Operator


// Tells the type of operaator we are using, it can be:
        // 1. String - "Luffy"...
        // 2. Number - 23, 78...
        // 3. Boolean - True/False
        // 4. Undefined
        // 5. Null
        // 6. BigInt
        // 7. Symbol

// Above datatypes are primitive data types

let age1 = 21;
let first_name = "Pratham";

console.log(typeof(age1));
console.log(typeof(first_name));





//Conversion from number to string


// First way:

let age2 = 20;
age2 = age2 + "";
console.log(typeof(age2));     // In order to convert any number to string, we just have to add an empty string to it

//Second way:

let age3 = 10;
age3 = String(age3);
console.log(typeof(age3));





//Conversion of string to number

// First way:

let age4 = "45";
age4 = Number(age4);
console.log(typeof(age4));

// Second way:

let age5 = "90";
age5 = +age5;                      //Strings can be changed to numbers by joining a '+' sign before the string
console.log(typeof(age5));