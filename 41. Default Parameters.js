// Default Parameters




/**
// Without using default parameters

function addTwo(a,b) {
    if(typeof b === "undefined") {
        b = 0;
    }
    return a+b;
}

const ans = addTwo(4,5);
console.log(ans);
**/

/**
// With using default parameters

function addTwo(a,b = 0) {                       // If b isn't set, it'll be assigned 0 by default
    return a+b
}

const ans = addTwo(4,5);
console.log(ans);
**/