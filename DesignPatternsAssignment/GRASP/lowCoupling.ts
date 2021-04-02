/*
This class animal is highly coupled with all its subclasses

class Animal{
    breathe(){
        console.log('I breathe through lungs')
    }
    eat(){
        console.log('I eat food I have made')
    }
}
*/

// To decouple it, we declare it as an interface 
//so that each class implements its own version of the methods

interface Animal{
    breathe()
    eat()
}

interface WalkingAnimal{
    walk()
    run()
    jump()
}

interface SwimmingAnimal{
    swim()
}