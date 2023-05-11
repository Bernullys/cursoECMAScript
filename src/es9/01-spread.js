const user = {username: "Bernardo", age:35, country: "VE"};
const { age, ...values } = user;

console.log(age);
console.log(values)