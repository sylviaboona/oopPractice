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

class Fish implements Animal, SwimmingAnimal{
    breathe(){
        console.log('A fish can breath'); 
    }
    eat(){
        console.log('A fish eats'); 
    }
    swim(){
        console.log('A fish swims');
    }
}

class Horse implements Animal, WalkingAnimal{
    breathe(){
        console.log('A horse can breath'); 
    }
    eat(){
        console.log('A horse eats'); 
    }
    walk(){
        console.log('A horse walks');
    }
    run(){
        console.log('A horse runs')
    }

    jump(){
        console.log('A horse jumps')
    }
}
