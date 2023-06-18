// Clone Array , Concat and Spread



let arr1 = ["Item1", "Item2"];

// Method 1:

let arr2 = arr1.slice(0);                        // arr2 is clone of arr1
console.log(arr1 === arr2);                      // Gives false because arr1 and arr2 are separate arrays


// Method 2:

let arr3 = [].concat(arr1);                      // Using concat function
console.log(arr1 === arr3);


// Method 3:

let arr4 = [...arr1];                            // Using spread operator; "..." are called spread operator
console.log(arr4 === arr1);





// Slicing is fastest but spread operator is mostly used
