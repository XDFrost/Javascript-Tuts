// COMPUTED PROPERTIES



const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myval1";
const value2 = "myval2";

const obj = {
    // key1 : value1,              // Keys won't contains the values assigned to them
    // key2 : value2

    [key1] : value1,               // After confining key1 and key2 in [], they becomes computed properties and hence can access the values from above constants
    [key2] : value2       
}

console.log(obj);
