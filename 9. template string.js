// Template string

// Syntax: 

        // `....${variable_name}....`


let age = 21;
let name = "Pratham";

// We need: My name is Pratham and my age is 21



// Without using template string

let info = "My name is " + name + " and my age is " + age;
console.log(info);



//With using template string

let info_ = `My name is ${name} and my age is ${age}`;
console.log(info_);
