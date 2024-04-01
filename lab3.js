// Car1
// new Object()
let car1 = new Object();

car1.color="red";
car1.maxSpeed= 5;

car1.driver= new Object();
car1.driver.name= "Oleksandr Nykyforchyn";
car1.driver.category="C";
car1.driver.personal_limitations='No driving at night';

car1.tuning= true,
car1.number_of_accidents=0;
//метод drive
car1.drive=function(){
    console.log('I am not driving at night');
};


//Car2
// обєкт через синтаксис літерала
let car2={
 color: 'red',
 maxSpeed: 10,
 driver:{
    name: 'Oleksandr Nykyfrochyn',
    category: 'B',
    personal_limitations: null
 },
 tuning: false,
 number_of_accidents:2,
 drive:function(){
    console.log('I can drive anytime');
 }

}
//вивід методів car1 car2
//console.log(car1.drive());
//console.log(car2.drive());

function Truck(color, weight,avgSpeed,brand,model){
    this.color=color;
    this.weight=weight;
    this.avgSpeed=avgSpeed;
    this.brand=brand;
    this.model=model
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};


Truck.prototype.trip= function(){
    if(!this.driver){
        console.log('No driver assigned');
    }
    else{
        console.log(this.driver.name);
        if(this.driver.nightDriving){
            console.log("drives at night");
        }
        else{
            console.log('does not drive at night')
        }
    }
    console.log(`and has ${this.driver.experience} years of experience`);
}

var truck1= new Truck("red", 5000, 60, "Ford", "F150");
truck1.AssignDriver("Oleksandr Nykyforchyn", true, 5);
var truck2 = new Truck("red", 250, 10, "BMW", 'F43');
truck2.AssignDriver("Oleksandr Nykyforchyn",false,1);
truck1.trip();
console.log("=======================");
truck2.trip();

console.log("ES6");


class Square {
    constructor(a) {
        this.a = a; // Сторона квадрата
    }

    static help() {
        console.log("У квадрата всі сторони рівні");
    }

    length() {
        return this.a * 4;
    }

    square() {
        return this.a ** 2;
    }

    info() {
        console.log("Довжини всіх 4 сторін: ", this.a, this.a, this.a, this.a);
        console.log("Площа: ", this.square());
        console.log("Сума довжин сторін: ", this.length());
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a); // Виклик конструктора батьківського класу з параметром 'a'
        this.b = b; // Ширина прямокутника
    }
    get getA(){
        return this.a;
    }
    set setA(value){
        this.a=value;
    }
    get getB(){
        return this.b;
    }
    set setB(value){
        this.b=value;
    }

    static help() {
        console.log("У прямокутника протилежні сторони рівні");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log("Довжина: ", this.a);
        console.log("Ширина: ", this.b);
        console.log("Площа: ", this.square());
        console.log("Периметр: ", this.length());
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha; 
        this.beta = beta; 
    }

    static help() {
        console.log("У ромба протилежні сторони рівні");
    }

    length() {
        return this.a * 4;
    }

    square() {
        return this.a ** 2 * Math.sin(this.alpha * Math.PI / 180);
    }

    info() {
        console.log("Довжина сторони: ", this.a);
        console.log("Тупий кут: ", this.alpha, "градусів");
        console.log("Гострий кут: ", this.beta, "градусів");
        console.log("Площа: ", this.square());
        console.log("Периметр: ", this.length());
    }
}

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta); 
        this.b = b; 
    }

    static help() {
        console.log("У паралелограма протилежні сторони рівні");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * Math.PI / 180); // Формула для площі паралелограма
    }

    info() {
        console.log("Довжина першої сторони: ", this.a);
        console.log("Довжина другої сторони: ", this.b);
        console.log("Тупий кут: ", this.alpha, "градусів");
        console.log("Гострий кут: ", this.beta, "градусів");
        console.log("Площа: ", this.square());
        console.log("Периметр: ", this.length());
    }
}
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square= new Square(1);
square.info();
let rectangle= new Rectangle(12,4);
rectangle.info();
let rhombus= new Rhombus(4,19,3);
rhombus.info();
let parallelogram = new Parallelogram(5,2,4,1);
parallelogram.info();

function Triangular(a=3, b=4,c=5){
    return {a:a,b:b,c:c}
}

const triangle = Triangular();
console.log(triangle);


const defaultTriang = Triangular(); 
const customTriang1 = Triangular(6, 8, 10); 
const customTriang2 = Triangular(7, 24, 25)
console.log(defaultTriang);
console.log(customTriang1);
console.log(customTriang2);


function PiMultiplier(a){
    return function(){
        return Math.PI * a;
    }
}

const func1= PiMultiplier(2);
const func2= PiMultiplier(2/3);
const func3= PiMultiplier(Math.PI/2);
console.log(func1());
console.log(func2());
console.log(func3());

function Painter(color) {
    return function(object) {
        if (object && object.type) {
            console.log(`Color: ${color}, Type: ${object.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

// Приклади використання
const obj1 = { type: "circle" };
const obj2 = { type: "square" };
const obj3 = {};

PaintBlue(obj1); 
PaintRed(obj2); 
PaintYellow(obj3);

const PaintBlue1 = Painter("blue");
const PaintRed2 = Painter("red");
const PaintYellow3 = Painter("yellow");

// Об'єкти для тестування
const object1 = { maxSpeed: 280, type: "Truck" };
const object2 = { maxSpeed: 180, type: "Sportcar", avgSpeed: 90, color: "purple" };
const object3 = { color: "magenta", loadCapacity: 2400, isCar: true };

// Демонстрація роботи функцій
console.log("PaintBlue:");
PaintBlue(object1);
PaintBlue(object2);
PaintBlue(object3);

console.log("\nPaintRed:");
PaintRed(object1);
PaintRed(object2);
PaintRed(object3);

console.log("\nPaintYellow:");
PaintYellow(object1);
PaintYellow(object2);
PaintYellow(object3);

