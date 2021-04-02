var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log('Bluray player turning on...');
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('Bluray turning off...');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('Playing Bluray disc...');
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('Amp turning on...');
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amp turning off...');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("setting source to " + source);
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
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('TV turning on...');
    };
    TV.prototype.turnOff = function () {
        console.log('TV turning off...');
    };
    return TV;
}());
var HomeTheatreFacade = /** @class */ (function () {
    function HomeTheatreFacade(bluray, amp, lights, tv) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
    }
    HomeTheatreFacade.prototype.watchMovie = function () {
        this.bluray.on();
        this.bluray.play();
        this.lights.dim();
        this.amp.on();
        this.amp.setSource('bluray');
        this.tv.turnOn();
    };
    HomeTheatreFacade.prototype.endMovie = function () {
        this.bluray.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
    };
    return HomeTheatreFacade;
}());
var bluray = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
bluray.on();
bluray.play();
amp.on();
lights.dim();
tv.turnOn();
// let hometheatre = new HomeTheatreFacade(bluray, amp, lights, tv);
// hometheatre.watchMovie()
