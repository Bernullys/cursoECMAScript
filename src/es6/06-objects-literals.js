// enhanced object literals

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

// New way:

function newUser(user, age, country, other) {
    return {
        user,
        age,
        country,
        other: other
    }
}

console.log(newUser("BADR", 35, "VE", 25674));