// declarando una clase:
//class User {};
// para crear una instancia de una clase:
//const newUser = new User();

//vamos a hacer la clase con los metodos que vamos a agregar:

class user {
    //metodos:
    greeting() {
        return "Hello";
    }
};
//instancia 1
const newUser = new user();
console.log(newUser.greeting());
//instancia 2
const newUser2 = new user();
console.log(newUser2.greeting());


// constructor

class demo {
    constructor() {
        console.log("Demo");
    }
    hello() {
        return "Hello";
    }
}

const bernardo = new demo(); // aqui se esta llamando el constructor que inicializa los elementos cuando son asignados con la instancia.


// this

class beta {
    constructor(name) {
        this.name = name;
    }
    //method:
    speak() {
        return "Hey you";
    }
    sayHey() {
        return `${this.speak()} ${this.name}!`;
    }
}

const patri = new beta("Patricia");
console.log(patri.sayHey());


// setters getters

class alpha {
    //constructor
    constructor(nickname, gender) {
        this.nickname = nickname;
        this.gender = gender;
    }
    //methods
    sound() {
        return "Heyyyyyyyyyyy";
    }
    call() {
        return `${this.sound()} ${this.nickname}!`;
    }
    //getter
    get uNickname() {
        return this.nickname;
    }
    //setter
    set uGender(x) {
        return this.gender = x;
    }
}

const naro = new alpha("Naro", "Male");
console.log(naro.nickname, naro.gender);
console.log(naro.gender = "Masculino");
