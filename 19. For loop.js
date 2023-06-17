// For Loop

// Syntax:

        // for(variable is initialised; condition; increment/decrement) {
        //     Code to be executed
        // }
    
for(let i = 0; i<=10; i++) {
    console.log(i);
}


// Ex: 

    let total = 0;
    for(let num = 0; num<10; num++) {
        let user = prompt("Enter a number: ");
        let inp = Number(user);
        total = total + inp;
    }

    document.write("Sum of all user inputs is: ",total);
