// INHERITANCE

// class Animal{
//     name:string
//     constructor(name){
//         this.name  = name
//     }
//     run(){
//         console.log(`${this.name} ran`);  
//     }
//     walk(){
//         console.log(`${this.name} walked`);  
        
//     }
// }

// class Fish extends Animal{
//     swim(){
//         console.log(`${this.name} swam`); 
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log(`${this.name} flew`) 
//     }
// }

// const rat = new Animal('rat')
// rat.walk()
// rat.run()

// const fish = new Fish('Madfish')
// fish.walk()
// fish.run()
// fish.swim()



// USE COMPOSITION TO BRING ALL CLASSSES  FUNCTIONALITY TOGETHER

function swimmer({name}){
    return{
        swim: ()=> console.log(`${name} swam`), 
    }
}

function walkerAndRunner({name}){
    return{
        walk: ()=> console.log(`${name} walked`), 
        run: ()=> console.log(`${name} ran`), 
    }
}


function flyer({name}){
    return{
        fly: ()=> console.log(`${name} flew`), 
    }
}

function swimmingAnimal(name){
    const animal = {name:name}
    return{
        ...animal,
        ...walkerAndRunner(animal),
        ...swimmer(animal)
    }
}

function flyingSwimmingAnimal(name){
    const animal = {name:name}
    return{
        ...animal,
        ...walkerAndRunner(animal),
        ...swimmer(animal),
        ...flyer(animal)
    }
}
const obj = flyingSwimmingAnimal('Fish')
obj.swim()
obj.walk()
obj.run()
obj.fly()
