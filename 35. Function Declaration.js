// Function Declaration

// Syntax:
            // function function_name(parameters) {
            //     code to be executed
            // }

// Can be used if we want to use a code multiple times



function world() {
    console.log("Hello World");
}

world();                    // Calling/invoking the function
world();                    
world();                    



function sum(num1, num2) {                // num1 and num2 are parameters
    return (num1+num2);
}

const returning_value = sum(3, 5);
console.log(returning_value);



function sum_3(num1, num2, num3)   {
    console.log(num1 + num2 + num3);
}

sum_3(2,3,5);
sum_3(2,3);                          // Gives NaN(Not a number), because 1 parameter is missing i.e. it becomes undefined

function is_even(number) {
    if(number%2 === 0) {
        return true;
    }
        return false;
}

console.log(is_even(3));
