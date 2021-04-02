///Weather station is the subject (Observable)
interface Subject{
    registerObserver(obs: Observer);
    removeObserver(obs: Observer);
    notifyObservers();
}


interface Observer{
    update(temperature: number)
}

class WeatherStation implements Subject{
    private temperature: number;
    private observers: Observer[] = []

    setTemperature(temp: number){
        console.log(`WeatherStation: new temperature measurement: ${temp}`);
        this.temperature = temp;
        this.notifyObservers();
    }
    registerObserver(obs: Observer){
        this.observers.push(obs)
    }
    removeObserver(obs: Observer) {
        let index = this.observers.indexOf(obs)
        this.observers.splice(index, 1)
    }      
    notifyObservers(){
        for (let observer of this.observers){
            observer.update(this.temperature)
        } 
    }
}

class TemperatureDisplay implements Observer{
    private subject: Subject;

    constructor(weatherStation: Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this)
    }

    update(temperature: number){
        console.log('TempDisplay: I need to update my display'); 
    }
}

class Fan implements Observer{
    private subject: Subject;

    constructor(weatherStation: Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this)
    }

    update(temperature: number){
        if(temperature>25){
            console.log('Fan: Turning on......Its hot'); 
        }else{
            console.log('Fan: Turning off....its now cool');
        }
    }
}

let weatherStation = new WeatherStation()
let tempDisplay = new TemperatureDisplay(weatherStation)
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);

