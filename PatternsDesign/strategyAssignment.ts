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
    protected travelStrategy: TravelStrategy;
    travel(){
        this.travelStrategy.travel();
    }
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
