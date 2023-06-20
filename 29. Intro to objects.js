 // OBJECTS

// - Stores key value pairs
// - Reference type
// - Don't have indexes




// Object creation:
//Syntax:

        // datatype object_name = {key: value, key: value....}

const person = {name: "Pratham", age: 21, hobbies: ["Sleeping", "Gaming", "Music"], "person interests": ["Programming", "ML", "Data science"]};               // Also called object literal
console.log(person);
console.log(typeof person);

// - object_name.key is used to access the value/property
// - Key is in string by default
// - Array can be stored in the value

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// Adding key value pair to object
// Syntax:

        // object_name.key = value

// person.gender = "Male";                            // Called dot notation
person["gender"] = "Male";                            // Called bracket notation

console.log(person);
console.log(person.gender);




// dot vs bracket notation

// dot notation
// console.log(person.person interests) ;                       // Gives error because separated by space

//Bracket notation
console.log(person["person interests"]);




// Adding key value pair in object but with pre-assigned key

const key = "E-mail";
person[key] = "xyz@gmail.com";
console.log(person);
