/*
Showing a movie
DVDPlayer
Speakers/amplifier
Projector
Lighting
*/
class DVDPlayer{
    turOn(){
        console.log('DVD Player turning on....'); 
    }
    play(){
        console.log('Movie has started playing..');   
    }
    turnOff(){
        console.log('DVD Player turning off..');   
    }
}

class Amplifier{
    turnOn(){
        console.log('Amp turning on....'); 
    }
    setVolume(volume){
        console.log(`Volume is set to ${volume}`);
    }
    turnOff(){
        console.log('Amp turning off..');   
    }
}

class Projector{
    turnOn(){
        console.log('Projector turning on....'); 
    }
    turnOff(){
        console.log('Projector turning off..');   
    }

}

class Lighting{
    dim(){
        console.log('Lights are dimming');
    }
}

//Step 1 : Create a facade class
class CinemaFacade{
    //Variables
    private dvdPlayer: DVDPlayer;
    private amp: Amplifier;
    private projector: Projector;
    private lights: Lighting;

    constructor(dvdPlayer: DVDPlayer, amp: Amplifier, projector: Projector, lights: Lighting){
        this.dvdPlayer = dvdPlayer;
        this.amp = amp;
        this. projector = projector;
        this.lights = lights;
    }

    //Operations
    watchMovie(){
        this.dvdPlayer.turOn();
        this.amp.turnOn();
        this.amp.setVolume(20);
        this.projector.turnOn();
        this.lights.dim()
        this.dvdPlayer.play()
    }
}

let dvdPlayer = new DVDPlayer();
let amp = new Amplifier();
let projector = new Projector()
let lights = new Lighting()

//Inorder to watch a movie
// dvdPlayer.turOn();
// amp.turnOn();
// amp.setVolume(20);
// projector.turnOn();
// lights.dim()
// dvdPlayer.play();

let cinema = new CinemaFacade(dvdPlayer, amp, projector, lights);
cinema.watchMovie();



