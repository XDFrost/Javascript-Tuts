// Spread Operator




// - If same keys are mentioned twice, then the key value pair that is made later will be assigned

const obj1 = {
    key1: "value1",
    key2: "value2",
    key1: "value59"                    
};
console.log(obj1);


const obj2 = {
    key1: "value_Unique",
    key3: "value3",
    key4: "value4"                    
};


const new_obj = {...obj1};          // clones the key value pairs from obj1
console.log(new_obj);


const new_obj2 = {...obj1, ...obj2};           // Will contain key1 pair from obj2 because it is assigned later
console.log(new_obj);


const new_obj3 = {...["item1", "item2"]};           // 0th index will act as key for item1 value and 1st index will act as key for item2 value
console.log(new_obj3);
