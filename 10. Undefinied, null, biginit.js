// UNDEFINIED

// If we create a variable and doesn't assign any value to it, it becomes undefinied type; Can be used with let and var but not with const



/**

let firstname;
var firstname_1;
// const firstname_3;                    //Gives error
console.log(typeof(firstname));
console.log(typeof(firstname_1));

**/



/**

let firstname;
console.log(typeof(firstname));
firstname = "Chopper"
console.log(typeof(firstname));
console.log(firstname);

**/




// NULL

/**
 
let myvar = null;

console.log(myvar);
console.log(typeof(myvar));              //Gives object


myvar = "Chopper"

console.log(myvar);
console.log(typeof(myvar));

**/




//BIGINT

// Used to store a number greater than the max value

console.log(Number.MAX_SAFE_INTEGER);              //We'll use bigint to store a number greater than this

/**

// Method 1:

let num = BigInt(234567865434567876543456787654588756789);
console.log(num);


// Method 2:

let num_1 = 234567n;                                 //using n at last also makes a number bigint
console.log(typeof(num_1))

**/