"use strict"

// class User {
//     constructor(name, dateBirth) {
//         this.name = name;
//         this._dateBirth = dateBirth;
//     }
// }

class User {
    #dateBirth;
    constructor(name, dateBirth) {
        this.name = name;
        this.#dateBirth = dateBirth;
    }
}

const user = new User('Kyrylo', 11032001);
console.log(user);
user.dateBirth = 213;
console.log(user);

