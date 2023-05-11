// promises syntaxis:

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("YESSS Its done");
        } else {
            reject("Oh Noooo");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));
    .finally( () => console.log("A finalizado la promesa") ); //no funciona y no se por que.