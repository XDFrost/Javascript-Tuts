// USING CONST FOR ARRAY CREATION 


// - We can still add and change elements in the array after using const but we can't make a new array of same name after using const

const fruits = ["Apple", "Mango"];
fruits.push("Banana");
console.log(fruits);                       // banana gets added to the array

fruits[1] = "Kivy";
console.log(fruits)                        // Mango gets changed to kivy

fruits = []                                // Gives error because fruits is already declared
