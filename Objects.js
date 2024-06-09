// Declared as :
    // 1. Literal       or      Non singleton object
    // 2. Constructor       or      singleton object

// singleton : Uniquely made when an object is made using a constructor ; NOT MADE WHEN OBJECT IS DECLARED AS A LITERAL

const mysym = Symbol("key1")            // A symbol

Object.create               // Constructorz
const jsuser = {            // Object ; literal
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",           // Inaccessible by . 
    [mysym] : "mykey1",            // A symbol is used as key ; to use symbol as key, type [ symbol_variable ]
    age : 19,
    location : "Jaipur",
    email : "xyz@gmail.com",
    isLoogedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
// console.log(jsuser.full name);           // Error
console.log(jsuser["full name"]);

console.log(jsuser[mysym]);             // Accessing symbol key
console.log(typeof jsuser[mysym]);
console.log(typeof mysym);

jsuser.email = "changed@gmail.com"          // Overwriting values
console.log(jsuser.email);

// Object.freeze(jsuser)           // There won't be any changes applied to jsuser
jsuser.isLoogedIn = true
console.log(jsuser);




// FUNCTIONS CAN BE TREATED AS VARIABLES HERE   

jsuser.greeting = function() {
    console.log("Hello User");
}
console.log(jsuser.greeting);               // We get the reference of a function, it doesn't execute
console.log(jsuser.greeting());             // function executes


jsuser.greeting2 = function() {
    console.log(`Hello User, ${this.name}`);
}
console.log(jsuser.greeting2);
console.log(jsuser.greeting2());

jsuser.gender = "Male";
console.log(jsuser.gender);
console.log(jsuser);

const obj1 = {x : 1, y : 2}
const obj2 = {a : 3, b : 4}
const obj3 = Object.assign(obj1, obj2)

console.log(obj3);          // Concatenating 2 objects
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));



// Destructuring

const course = {
    coursenamme :  "js",
    price : 9999,
    courseInstructor : "A"
}

// course.courseInstructor
const {Instructor : courseInstructor} = course
console.log(Instructor);
