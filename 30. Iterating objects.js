// ITERATING OBJECTS



// Methods:

            // 1. for in loop
            // 2. object.keys

const person = {name: "Pratham", age: 21, hobbies: ["Sleeping", "Gaming", "Music"], "person interests": ["Programming", "ML", "Data science"]};



// 1. for in loop



for(let i in person) {
    // console.log(i);                   // Prints keys
    // console.log(person[i])               // Prints values
    // console.log(`${i}: ${person[i]}`);             // Prints key-value pairs
    console.log(i,":",person[i]);                     // Prints key-value pairs
}



// 2. object.keys



console.log(Object.keys(person));                // Gives an array of keys

for(let key of Object.keys(person)) {            // Gives all the values stored in the keys
    console.log(person[key]);
}
