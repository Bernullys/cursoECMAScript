async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
    yield await Promise.resolve(5);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello");


async function arraysOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}
const names = arraysOfNames(["Bernardo", "Patricia", "Joicito"]);
console.log("After");