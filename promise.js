// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Promise One");
//         let error = false
//         if(!error) {
//             resolve({username : "ABC", password : 123})
//         }
//         else {
//             reject("ERROR FOUND")
//         }
//     }, 1000)
// })

// promiseOne.then((user) => {             // We get user here
//     console.log(user);
//     return user.username                // Will be sent to next .then
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(console.log("Always run"))


// WITH fetch
fetch('https://api.github.com/users/XDFrost')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error: ", error);
})
.finally(console.log("ALWAYS RUN"))


// Use promise in code
// use fetch with API