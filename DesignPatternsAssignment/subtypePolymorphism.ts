class Animal{
    breath(){
        console.log('Breathes');
        
    }
    eat(){
        console.log('Eats');
    }
}

class Dog extends Animal{
    bark(){
        console.log('Dog barks');
        
    }
}

class Cow extends Animal{
    mow(){
        console.log('Cow mows');
        
    }
}

class Person extends Animal{
    talk(){
        console.log('Person speaks');
        
    }
}