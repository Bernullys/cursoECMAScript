let numbrs = [1, 3, 4, 5, 6, 7, 8];
console.log(numbrs.includes(3));
console.log(numbrs.includes(10));

let names = ["Bernardo", "Patricia", "Joy"];
console.log(names.includes("Bernardo"));
console.log(names.includes("Bernardo", "Patricia"));
console.log(names.includes("Bernardo", "Patricia", "Joy"));
console.log(names.includes("Bernardo", "Patricia", "joy"));
console.log(names.includes("Bernardo", "patricia", "joy"));     //ojo con esto.