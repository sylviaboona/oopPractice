//Context class
class Commute{
    travel(transport){
        return transport.travelTime();
    }
}

//Interface
class Vehicle{
    travelTime(){
        return this.timeTaken;
    }
}

//strategy1
class Bus extends Vehicle{
    constructor(){
        super();
        this.timeTaken = 30;
    }
}

//strategy2
class Taxi extends Vehicle{
    constructor(){
        super();
        this.timeTaken = 15;
    }
}

//strategy3
class Bicycle extends Vehicle{
    constructor(){
        super();
        this.timeTaken = 5;
    }
}

//Using the strategies
const commute1 = new Commute();
console.log(commute1.travel(new Bus()));
console.log(commute1.travel(new Taxi()));
console.log(commute1.travel(new Bicycle()));