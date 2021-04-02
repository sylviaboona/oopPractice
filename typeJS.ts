// function greet(name:string){
//     console.log(`Hello ${name}`);
    
// }
// greet('Sylvia')

class Person{
    firstname: string;
    lastname: string;
    greet(){
        console.log('Hey there!');
    }
}

class Child extends Person{
    greet(){
        console.log('Hiiiiiiiii there!');  
    }
    greetAgain(){
        console.log('Yo Whatsup!');
    }
    greetMature(){
        super.greet();
    }
}

let child1 = new Child();
child1.greetMature();