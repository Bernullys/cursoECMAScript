// arrays destructuring

let fruits = ["apple", "banana"];
let [a, b] = fruits;
console.log(a, b);


//object destructuring

let user = {username: "Bernardo", age: 35};
let {username, age} = user;
console.log(username, age, user.username, user.age);


// spread operator

let person = { name: "Bernardo", age: 35 };
let country = "Venezuela";

let data = { gender: "Male", ...person, country};
console.log(data);


// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[3]);
    return num + values[2];
};

sum(1, 2, 2, 2, 3, 2);
