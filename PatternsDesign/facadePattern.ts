class BlurayPlayer{
    on(){
        console.log('Bluray player turning on...');
    }
    turnOff(){
        console.log('Bluray turning off...');
    }
    play(){
        console.log('Playing Bluray disc...');
    }
}

class Amplifier{
    on(){
        console.log('Amp turning on...');
    }
    turnOff(){
        console.log('Amp turning off...');
    }
    setSource(source: string){
        console.log(`setting source to ${source}`);
    }
}

class Lights {
    dim(){
        console.log('Lights are dimming...');
    }
}

class TV{
    turnOn(){
        console.log('TV turning on...');
    }
    turnOff(){
        console.log('TV turning off...');
    }
}

class HomeTheatreFacade{
    private bluray: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;

    constructor(bluray: BlurayPlayer, amp: Amplifier, lights: Lights, tv: TV){
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
    }

    watchMovie(){
        this.bluray.on();
        this.bluray.play();
        this.lights.dim();
        this.amp.on();
        this.amp.setSource('bluray');
        this.tv.turnOn();
    }

    endMovie(){
        this.bluray.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
    }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();

// bluray.on();
// bluray.play();
// amp.on();
// lights.dim();
// tv.turnOn();

let hometheatre = new HomeTheatreFacade(bluray, amp, lights, tv);
hometheatre.watchMovie()

