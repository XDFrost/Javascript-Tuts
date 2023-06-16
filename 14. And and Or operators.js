// & and || Operators



// - Used to compare to or more conditions


// 1. & 

    // - Will be true if both conditions on left and right side of & are True
    // - If either of the conditions is false, answer will be false

let firstname = "Pratham";
let age = 21;

if(firstname[0] === "P" && age === 21) {

        console.log("True");

}

else {

        console.log("False");

}


// 2. ||

    // - Will be true if either of the conditions on both sides of || are true; both can also be true 

    if(firstname[0] === "p" || age === 21) {

        console.log("Truthy");

    }

    else {

        console.log("Falsy");

    }
    