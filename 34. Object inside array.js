// Object inside array 




const users = [
    {userid: 1, first_name: "Pratham", Gender: "Male"},
    {userid: 2, first_name: "Mohit", Gender: "Male"},
    {userid: 3, first_name: "Harshit", Gender: "Male"}
]

console.log(users);

for(let user of users) {
    console.log(user.userid);
    console.log(user.first_name);
    console.log(user.Gender);
}
