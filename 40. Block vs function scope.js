// Block scope vs Function scope 

// let and const are block scope i.e. we can't access any variable initialised with them outside the block
// var is function scope i.e. we can access any variable initialised with them outside the block




/**
{
    let firstname = "Pratham";
}
console.log(firstname);                      // Gives error because we can't use let and const outside the specified block
**/

/**
{
    var firstname = "Pratham Gupta";
}
console.log(firstname);
**/
