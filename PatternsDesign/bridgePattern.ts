/*
1) Identify what aspects of your object fall under the abstraction & implementation.
Define an interface for the Implementation Define an abstract class for the Abstraction
2) See what operations the client needs and define them in the base abstraction class.
3) Declare the operations that the abstraction needs in the general implementation interface
4) Create concrete implementation classes that follow the implementation interface.
5) Create refined abstractions for each variant by extending the base abstraction class.
6) Instantiate refined abstraction classes with concrete implementation
 */


interface Color{
    shade(): string
}

abstract class Shape{
    color: Color;
    constructor(color: Color){
        this.color = color;
    }
    draw(){
        console.log(); 
    }
}

class Red implements Color{
    shade(){
        return 'red'
    }
}

class Turquoise implements Color{
    shade(){
        return 'Turquoise'
    }
}

class Circle extends Shape{
    constructor(color: Color){
        super(color);
    }
    draw(){
        console.log(`Drawing a ${this.color.shade()} circle`);
    }
}

class Square extends Shape{
    constructor(color: Color){
        super(color);
    }
    draw(){
        console.log(`Drawing a ${this.color.shade()} square`);
    }
}

let circle1 = new Circle(new Red)
circle1.draw()

let square = new Square(new Turquoise)
square.draw()