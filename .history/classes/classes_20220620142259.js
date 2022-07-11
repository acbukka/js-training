// class myClass {
//   constructor(c) {
//     this.a = 10;
//     this.b = '123';
//     this.c = c;
//   }

//   render() {
//     return `----${this.a}----${this.b}----${this.c}----`
//   }

//   setA(a) {
//     this.a = a;
//   }


// }

// let newClass = new myClass(42);
// newClass.setA(100000000000000);
// let newClass1 = new myClass(42);
// console.log(newClass.render());
// console.log(newClass1.a());


class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

 // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`;
  }
}

const hero1 = new Hero('Varg', 1)
console.log(hero1);





let func = function () { }
func.prop1 = 1;
console.log(func.prop1);

let arr = [1, 2, 4];
arr.prop1 = 1;
console.log(arr.prop1);

function LegoMan(name) {
  this.name = name;
}

LegoMan.prototype.say = function (message) {
  console.log(this.name + ": " + `${message}`);
}

let alex = new LegoMan('Alex');
alex.say('Hello honey')


// геттеры и сеттеры

class LegoMan {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }

  set newAge(value) {
    this.age = value;
  }

  get represent() {
    return `My name is ${this.name}. I'm ${this.age} years old`
  }
}

const alex1 = new LegoMan('Alex')
console.log();
alex1.represent // My name is Alex. I'm 0 years old
console.log(alex1.newAge = 18);
alex1.newAge = 18;
console.log(alex1.represent);