// Intro to arrays

// - Is reference type 
// - Ordered collection of items
// - Has indexes
// - Non-Homogeneous nature
// - Is object in js



// Ex:
        let fruits = ["Apple", "Mango", "Melon"];               // Array Creation
        let mixed = [12, "Mango", null, undefined];              

        document.write(fruits[0]);                              // Accessing array elements through indexing
        console.log(mixed);



// Changing elements in an array

let GOAT = ["Dragon Ball", "Bleach", "Naruto"];
console.log(GOAT);
GOAT[1] = "One Piece";                                          // Element on index 1 is geeting changed
console.log(GOAT);

console.log(typeof(fruits));                                    // Since all refrence type are objects, so array is an object

console.log(Array.isArray(fruits));                             // Tells if the specified variable is an array or not
