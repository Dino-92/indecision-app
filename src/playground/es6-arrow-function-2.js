const add = (a, b) => {
    return a + b;
};
console.log(add(55,1));

const user = {
    name: 'Dino',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });  
    }
};
user.printPlacesLived();

const multiplier = {
 numbers: [10, 20, 30],
 multiplyBy: 3,
 multiply() {
     return this.numbers.map((number) => number * this.multiplyBy);
 }
};
console.log(multiplier.multiply());