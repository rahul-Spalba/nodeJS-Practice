const person = require("./person");

class PersonClass{

    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    sayHi(){
        return console.log(`About me ${this.name} ${this.address}`);
    }
}

module.exports =PersonClass;


