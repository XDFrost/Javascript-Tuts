
// if else condition

// Format:             if(condition){
//                         code
//                     }
                       
//                     else                  Works if condition in if statement is false
//                     {
//                         code
//                     }



/**

let age = 17;

if(age>=18){
    console.log("User is greater than 18");
}

else{
    console.log("User is not 18 years old");
}

**/



/**

let num = 14;
if(num%2==0){
    console.log("Even")
}
else{
    console.log("odd")
}

**/

 



/**

Falsy Values:

    false
    ""
    null
    undefined
    0

**/


let firstname = null;                 //If any of the above mentioned values are used, else block will be applied because those are falsy values

if(firstname){
    console.log(firstname);
}

else{
    console.log("Fistname is kinda empty");
}


/**

Truthy Values:

    "Anything  written"
    1, -1

**/

