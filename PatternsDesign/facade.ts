/*
client wants to watch a movie
    - DVD Player
    - Projector/TV
    - Speakers/Amplifier
    - Lighting mood
*/ 

class DVDPlayer{
    turnOn(){
        console.log('DVD Player is starting...');  
    }
    pressPlay(){
        console.log('Movie has started playing...');  
    }
    turnOff(){
        console.log('DVD player off');
    }
}

class Projector{
    turnOn(){
        console.log('Projector is on...');  
    }
    turnOff(){
        console.log('Projector is off...');
    }
}

class Amplifier{
    turnOn(){
        console.log('Amplifier is on...');  
    }
    setSource(source){
        console.log(`Amplifier source is ${source}`);
    }
    setVolume(volume){
        console.log(`Volume has been set to ${volume}`);
    }
    turnOff(){
        console.log('Amplifier is off...');
    }
}

class Lights{
    dim(){
        console.log('Lights are dimming...'); 
    }
}


//This is where the facade comes in. We create an interface where the client 
// can access all these operations in a simpler and less complex way

class CinemaFacade{
    //variables
    private dvdPlayer: DVDPlayer;
    private projector: Projector;
    private amp: Amplifier;
    private lights: Lights;

    //operations
    constructor(dvdPlayer: DVDPlayer, projectorArg: Projector, ampArg: Amplifier,lightsArg: Lights){
        this.dvdPlayer = dvdPlayer;
        this.projector = projectorArg;
        this.amp = ampArg;
        this.lights = lightsArg;
    }

    watchMovie(){
        this.dvdPlayer.turnOn();
        this.projector.turnOn();
        this.amp.turnOn();
        this.amp.setSource('MyPlayer');
        this.amp.setVolume(15);
        this.lights.dim();
        this.dvdPlayer.pressPlay();
    }

    endMovie(){
        this.dvdPlayer.turnOff();
        this.projector.turnOff();
        this.amp.turnOff();
    }
}


//Now the client wants to watch the movie

let dvdPlayer = new DVDPlayer();
let projector = new Projector();
let amp = new Amplifier();
let lights = new Lights();

//To watch the movie these are the actions the client must perform
// dvdPlayer.turnOn();
// projector.turnOn();
// amp.turnOn();
// amp.setSource('MY Bluray');
// amp.setVolume(15);
// lights.dim();
// dvdPlayer.pressPlay();

let cinema = new CinemaFacade(dvdPlayer, projector, amp, lights);
cinema.watchMovie();
cinema.endMovie();

