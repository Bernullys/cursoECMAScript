// setters getters
class alpha {
    //constructor
    constructor(nickname, gender) {
        this.nickname = nickname;
        this.gender = gender;
    }
    //methods
    #sound() {
        return "Heyyyyyyyyyyy";
    }
    call() {
        return `${this.sound()} ${this.nickname}!`;
    }
    //getter
    get #uNickname() {
        return this.nickname;
    }
    //setter
    set #uGender(x) {
        return this.gender = x;
    }
}
const naro = new alpha("Naro", "Male");
console.log(naro.nickname, naro.gender);
console.log(naro.gender = "Masculino");
