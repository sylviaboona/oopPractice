/*
Traveler
    - shortRouteTraveller
    - MediunRouteTraveller
    - longRouteTraveller

Assume we are developing a system for a travel agency
TravelMeans
    - ByBycycle
    - ByTaxi
    - ByBus

Step 1: Identify the aspects of the Context class that vary (across subtypes and / or objects).
Step 2: Separate the aspects of the class that vary from those that don’t.
Step 3: Encapsulate what varies / what is separates (Create a supertype, i.e. Interface or Abstract class). This serves as the (Strategy / Policy identifier).
Step 4: Program to an interface (Abstraction), not implementation. Create concrete implementations of the Strategy whereby each extends an abstract class or implements an interface.
Step 5: In the context class, create a variable of type as the supertype of the strategy (Let it’s type not be any of the concrete implementations of the strategy supertype). This variable can possibly be protected.
Step 6: In the context class, Create a setter method for the variable created in step 5.
Step 7: In the context class, Create a method to be used for executing the abstract method in the strategy
 Step 8: Test for whether the The Strategy Pattern is implemented successfully.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Concrete implementations of TravelStrategy
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travel = function () {
        console.log('Travelling by Bus.......');
    };
    return Bus;
}());
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travel = function () {
        console.log('Travelling by Taxi.......');
    };
    return Taxi;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle() {
    }
    Bicycle.prototype.travel = function () {
        console.log('Travelling by Bicycle.......');
    };
    return Bicycle;
}());
//Traveler is the context class
var Traveler = /** @class */ (function () {
    function Traveler() {
    }
    //Step 1: Identify the aspects of the Context class 
    //that vary (across subtypes and / or objects).
    Traveler.prototype.travel = function () {
        // Step 7: In the context class, Create a method to be used for 
        //executing the abstract method in the strategy
        this.travelStrategy.travel();
    };
    //Step 6: In the context class, Create a setter method for the variable created in step 5.
    Traveler.prototype.setTravelStrategy = function (travelStrategyArg) {
        this.travelStrategy = travelStrategyArg;
    };
    return Traveler;
}());
var ShortRouteTraveller = /** @class */ (function (_super) {
    __extends(ShortRouteTraveller, _super);
    function ShortRouteTraveller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortRouteTraveller.prototype.travel = function () {
        console.log('I am travelling for a short distance');
        this.travelStrategy.travel();
    };
    return ShortRouteTraveller;
}(Traveler));
var MediumRouteTraveller = /** @class */ (function (_super) {
    __extends(MediumRouteTraveller, _super);
    function MediumRouteTraveller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediumRouteTraveller.prototype.travel = function () {
        console.log('I am travelling for a medium distance');
        this.travelStrategy.travel();
    };
    return MediumRouteTraveller;
}(Traveler));
var LongRouteTraveller = /** @class */ (function (_super) {
    __extends(LongRouteTraveller, _super);
    function LongRouteTraveller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LongRouteTraveller.prototype.travel = function () {
        console.log('I am travelling for a long distance');
        this.travelStrategy.travel();
    };
    return LongRouteTraveller;
}(Traveler));
var traveler;
// traveler = new ShortRouteTraveller();
// traveler.travel();
// traveler = new MediumRouteTraveller();
// traveler.travel();
// traveler = new LongRouteTraveller();
// traveler.travel();
// If a shortRouteTraveler wants to travel by Bus
traveler = new ShortRouteTraveller();
traveler.setTravelStrategy(new Bus);
traveler.travel();
// If a longRouteTraveler wants to travel by Bus
traveler = new LongRouteTraveller();
traveler.setTravelStrategy(new Bus);
traveler.travel();
// If a mediumRouteTraveler wants to travel by Bicycle
traveler = new MediumRouteTraveller();
traveler.setTravelStrategy(new Bicycle);
traveler.travel();
