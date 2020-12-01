class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }
    getDescription() {
        return `Hi.${this.name} is ${this.age} year(s) old.`;
    }
}

class student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            greeting += ` I am visiting from ${this.location}.`;
        }
        return greeting;
    }   
}  
const me = new student('Dino Ghezal', 27, 'Computer Science');
console.log(me.getDescription());

const trip = new Traveler('Dino Ghezal', 27, 'San Francisco');
console.log(trip.getGreeting());

const other = new Traveler(undefined, undefined, 'nowhere');
console.log(other.getGreeting());