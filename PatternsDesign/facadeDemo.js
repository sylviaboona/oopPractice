/*
Showing a movie
DVDPlayer
Speakers/amplifier
Projector
Lighting
*/
var DVDPlayer = /** @class */ (function () {
    function DVDPlayer() {
    }
    DVDPlayer.prototype.turOn = function () {
        console.log('DVD Player turning on....');
    };
    DVDPlayer.prototype.play = function () {
        console.log('Movie has started playing..');
    };
    DVDPlayer.prototype.turnOff = function () {
        console.log('DVD Player turning off..');
    };
    return DVDPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.turnOn = function () {
        console.log('Amp turning on....');
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log("Volume is set to " + volume);
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amp turning off..');
    };
    return Amplifier;
}());
var Projector = /** @class */ (function () {
    function Projector() {
    }
    Projector.prototype.turnOn = function () {
        console.log('Projector turning on....');
    };
    Projector.prototype.turnOff = function () {
        console.log('Projector turning off..');
    };
    return Projector;
}());
var Lighting = /** @class */ (function () {
    function Lighting() {
    }
    Lighting.prototype.dim = function () {
        console.log('Lights are dimming');
    };
    return Lighting;
}());
//Step 1 : Create a facade class
var CinemaFacade = /** @class */ (function () {
    function CinemaFacade(dvdPlayer, amp, projector, lights) {
        this.dvdPlayer = dvdPlayer;
        this.amp = amp;
        this.projector = projector;
        this.lights = lights;
    }
    //Operations
    CinemaFacade.prototype.watchMovie = function () {
        this.dvdPlayer.turOn();
        this.amp.turnOn();
        this.amp.setVolume(20);
        this.projector.turnOn();
        this.lights.dim();
        this.dvdPlayer.play();
    };
    return CinemaFacade;
}());
var dvdPlayer = new DVDPlayer();
var amp = new Amplifier();
var projector = new Projector();
var lights = new Lighting();
//Inorder to watch a movie
// dvdPlayer.turOn();
// amp.turnOn();
// amp.setVolume(20);
// projector.turnOn();
// lights.dim()
// dvdPlayer.play()
var cinema = new CinemaFacade(dvdPlayer, amp, projector, lights);
cinema.watchMovie();
