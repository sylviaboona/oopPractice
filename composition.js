// INHERITANCE
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function swimmer(_a) {
    var name = _a.name;
    return {
        swim: function () { return console.log(name + " swam"); }
    };
}
function walkerAndRunner(_a) {
    var name = _a.name;
    return {
        walk: function () { return console.log(name + " walked"); },
        run: function () { return console.log(name + " ran"); }
    };
}
function flyer(_a) {
    var name = _a.name;
    return {
        fly: function () { return console.log(name + " flew"); }
    };
}
function swimmingAnimal(name) {
    var animal = { name: name };
    return __assign(__assign(__assign({}, animal), walkerAndRunner(animal)), swimmer(animal));
}
function flyingSwimmingAnimal(name) {
    var animal = { name: name };
    return __assign(__assign(__assign(__assign({}, animal), walkerAndRunner(animal)), swimmer(animal)), flyer(animal));
}
var obj = flyingSwimmingAnimal('Fish');
obj.swim();
obj.walk();
obj.run();
obj.fly();
