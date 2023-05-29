// function* iterate(array) {
//     for (let value of array) {
//         yield value;
//     };
// };

// const it = iterate(["Bernardo", "Patricia", "Joy"]);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

function* getId() {
    let michi = 1;
    while (true) {
        yield michi++;
    };
};

const michiId = getId();
console.log(michiId.next().value);
console.log(michiId.next().value);
console.log(michiId.next().value);
console.log(michiId.next().value);
console.log(michiId.next().value);
console.log(michiId.next().value);