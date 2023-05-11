// promises syntaxis:

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("YESSS Its done");
        } else {
            reject("Oh Noooo");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));