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

/*
Step 2: Separate the aspects of the class that vary from those that don’t.
Step 3: Encapsulate what varies / what is separates (Create a supertype, 
i.e. Interface or Abstract class). 
This serves as the (Strategy / Policy identifier).
Step 4: Program to an interface (Abstraction), not implementation. 
Create concrete implementations of the Strategy whereby each extends an abstract class or implements an interface.
*/
interface TravelStrategy{
    travel(): any
}


//Concrete implementations of TravelStrategy
class Bus implements TravelStrategy{
    travel(){
        console.log('Travelling by Bus.......');
    }
}

class Taxi implements TravelStrategy{
    travel(){
        console.log('Travelling by Taxi.......');
    }
}

class Bicycle implements TravelStrategy{
    travel(){
        console.log('Travelling by Bicycle.......');
    }
}

//Traveler is the context class
class Traveler{
    //Variables
    //Step 5: In the context class, create a variable of type as the supertype of the strat
    //(Let it’s type not be any of the concrete implementations of the strategy supertype). 
    //This variable can possibly be protected.

    protected travelStrategy: TravelStrategy;
    //Step 1: Identify the aspects of the Context class 
    //that vary (across subtypes and / or objects).
    travel(){
        // Step 7: In the context class, Create a method to be used for 
        //executing the abstract method in the strategy
        this.travelStrategy.travel();
    }
    //Step 6: In the context class, Create a setter method for the variable created in step 5.
    setTravelStrategy(travelStrategyArg: TravelStrategy){
        this.travelStrategy = travelStrategyArg;
    }
}

class ShortRouteTraveller extends Traveler{
    travel(){
        console.log('I am travelling for a short distance');
        this.travelStrategy.travel();
    }
}

class MediumRouteTraveller extends Traveler{
    travel(){
        console.log('I am travelling for a medium distance');
        this.travelStrategy.travel();
    }
}

class LongRouteTraveller extends Traveler{
    travel(){
        console.log('I am travelling for a long distance');   
        this.travelStrategy.travel();
    }
}

// a traveler who polymorphically travels, can use various types of routes and means
let traveler: Traveler;
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
