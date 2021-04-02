class Person{
    firstname: string;
    lastname: string;
    greet(){
        console.log('Hey there!');
    }
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        console.log(`Hi, am parent ${this.firstname}`);
        
    }
}

class Child extends Person{
    constructor(firstname, lastname, age){
        //using the super method to access parameters from the base class constructor
        super(firstname, lastname);
        this.age = age;
        console.log(`Hi, am child ${this.firstname}`);
    }
    greet(){
        console.log('Yelloooo! How are you?');  
    }
    greetAgain(){
        console.log('Tell me how do you do!');
    }
    //using the super keyword to access the greet method from the base class
    greetMature(){
        super.greet();
    }
}

let child1 = new Child('Sylvia', 'Boonabaana', 16);
child1.greetMature();