// if, elseif, else

// Working:
            // When "if" condition is not satisfied, "else if" condition will be taken into consideration even if else if codition is false, "else" block will be executed 
            // When one condition is statisfied, next conditions aren't checked
            // If neither of the conditions gets satisfied, else will execute


            

let temp = 20;

if(temp < 0) {
    console.log("Extremely Cold");
}

else if(temp < 15) {
    console.log("Cold");
}

else if(temp < 25) {
    console.log("Moderate");
}

else if(temp < 35) {
    console.log("Hot");
}

else {
    console.log("Extremely Hot");
}
