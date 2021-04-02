/*
client wants to watch a movie
    - DVD Player
    - Projector/TV
    - Speakers/Amplifier
    - Lighting mood
*/
var DVDPlayer = /** @class */ (function () {
    function DVDPlayer() {
    }
    DVDPlayer.prototype.turnOn = function () {
        console.log('DVD Player is starting...');
    };
    DVDPlayer.prototype.pressPlay = function () {
        console.log('Movie has started playing...');
    };
    DVDPlayer.prototype.turnOff = function () {
        console.log('DVD player off');
    };
    return DVDPlayer;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.turnOn = function () {
        console.log('Projector is on...');
    };
    Projector.prototype.turnOff = function () {
        console.log('Projector is off...');
    };
    return Projector;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.turnOn = function () {
        console.log('Amplifier is on...');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("Amplifier source is " + source);
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log("Volume has been set to " + volume);
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amplifier is off...');
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log('Lights are dimming...');
    };
    return Lights;
}());
//This is where the facade comes in. We create an interface where the client 
// can access all these operations in a simpler and less complex way
var CinemaFacade = /** @class */ (function () {
    //operations
    function CinemaFacade(dvdPlayerArg, projectorArg, ampArg, lightsArg) {
        this.dvdPlayer = dvdPlayerArg;
        this.projector = projectorArg;
        this.amp = ampArg;
        this.lights = lightsArg;
    }
    CinemaFacade.prototype.watchMovie = function () {
        this.dvdPlayer.turnOn();
        this.projector.turnOn();
        this.amp.turnOn();
        this.amp.setSource('MyPlayer');
        this.amp.setVolume(15);
        this.lights.dim();
        this.dvdPlayer.pressPlay();
    };
    CinemaFacade.prototype.endMovie = function () {
        this.dvdPlayer.turnOff();
        this.projector.turnOff();
        this.amp.turnOff();
    };
    return CinemaFacade;
}());
//Now the client wants to watch the movie
var dvdPlayer = new DVDPlayer();
var projector = new Projector();
var amp = new Amplifier();
var lights = new Lights();
//To watch the movie these are the actions the client must perform
// dvdPlayer.turnOn();
// projector.turnOn();
// amp.turnOn();
// amp.setSource('MY Bluray');
// amp.setVolume(15);
// lights.dim();
// dvdPlayer.pressPlay();
var cinema = new CinemaFacade(dvdPlayer, projector, amp, lights);
cinema.watchMovie();
cinema.endMovie();
