// While Loop

// Follows DRY(Don't Repeat Yourself) principle
// Used to execute a block of code again and again when condition is met

//Syntax:   

        // while(condition) {
        //     Code to be executed
        //     increment/decrement 
        // }


let i = 0;
while(i<=3) {
    console.log(i);
    i++;
}


// Working:

        // 1. i is first initialised to 0
        // 2. 0<=3; condition is true, so code will be executed
        // 3. After execution, i is incrementd by 1
        // 4. Again condition is checked
        // 5. If condition is false, we'll get out of the loop and while block will end


// Ex:

    // Sun of first n natural numbers

let num = 0;
let total = 0;
while(num<=100) {
    total = total + num;
    num++;
}

console.log(total);
