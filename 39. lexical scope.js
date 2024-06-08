// Lexical scope

// If a value isn't present in the function, then js checks the lexical environment fot the value
// If the value is present in lexical environment, it is assigned to the function
// The block outside of a function is the lexical environment of the function




const myvar = "value1";

function myApp() {
    // const myvar = "value1";
    function myfun() {
        // const myvar = "value59";                       
        console.log("Inside myfun", myvar);                    
    }
    const myfun2 = function() {}
    const myfun3 = () => {}
    console.log(myvar);
    myfun();
}

myApp();


// In the above example, js check if myApp function has myvar or not, if not, it checks the lexical environment; now, js check in myfun for the variable, if it is not present, it checks myApp(lexical env of myfun) and if myvar is still not in myApp, js checks in lexical env of myApp
