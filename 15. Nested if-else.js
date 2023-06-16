// Nested if-else conditions
// - conditional statements are inside another conditional statements



// Guess a number game

let winning_num = 21;

let guess = +prompt("Guess a number");                        // prompt is used to take input from the user; prompt takes input in string, so user's input will be type string; we can use alert inplace of prompt

if(guess === winning_num) {

    console.log("Guess is right");

} else {

    if(guess < winning_num) {                                // Nested if-else
        cout<<"Guess is too low";
    }
    else {
        cout<<"GUess is too high";
    }

}
