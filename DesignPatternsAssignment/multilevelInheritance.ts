class GrandParent{
    firstname: string;
    lastname: string;

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
        greet(){
        console.log('Hello there!');
    }
}
class Parent extends GrandParent{
    firstname: string;
    lastname: string;
    height: string;
    greet(){
        console.log('Heeeeeeeeeeeey!');
    }
    constructor(firstname, lastname, height){
        super(firstname, lastname);
        this.height = height;
        console.log(`Hi, am parent ${this.firstname}`); 
    }
}

class Child extends Parent{
    constructor(firstname, lastname, age, height){
        super(firstname, lastname, height);
        this.age = age;
        console.log(`Hi, am child ${this.firstname}`);
    }
    greet(){
        console.log('Yelloooo! How are you?');  
    }
    greetAgain(){
        console.log('Tell me how do you do!');
    }
    greetLikeParent(){
        super.greet();
    }
}
let child1 = new Child('Sylvia', 'Boonabaana', 16, '6ft');
child1.greetLikeParent();
child1.greet();
