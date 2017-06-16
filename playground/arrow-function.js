var square = x => x * x; // Arrow functions
var mult   = (x, y) => x * y; // Need two parameters? Use parens.

console.log(square(9));
console.log(mult(9, 8));

var user = {
  name: 'Matthew',
  sayHi: () => { // Bad for object.
    console.log(arguments);
    console.log(`Hi!. I'm ${this.name}.`);
  },
  sayHiAlt () { // Good for object.
    console.log(arguments);
    console.log(`Hi!. I'm ${this.name}.`);
  }
}

user.sayHi(); // Bad for object.
user.sayHiAlt(1, 2, 3); // Good for object.
