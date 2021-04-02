abstract class Katogo{
    public description: string;
    

    getDescription(){
        return this.description;
    }

    public abstract cost():number;
}

class KatogoA extends Katogo{
    public description = 'This is Katogo A';
    public cost():number {
        return 3000;
    }
}

class KatogoB extends Katogo{
    public description = 'This is Katogo B';
    public cost():number {
        return 3500;
    }
}

abstract class KatogoOptions extends Katogo{
    public decoratedKatogo: Katogo
    abstract getDescription():string;
    public abstract cost():number;
}

class KatogoByenda extends KatogoOptions{
    decoratedKatogo: Katogo;

    constructor(katogo: Katogo){
        super();
        this.decoratedKatogo = katogo;
    }
    getDescription(){
        return this.decoratedKatogo.getDescription() + 'with Byenda';
    }
    cost():number {
        return this.decoratedKatogo.cost() + 2000;
    }
}

let jacobKatogo = new KatogoA();
jacobKatogo = new KatogoByenda(jacobKatogo)
console.log(jacobKatogo.getDescription());
console.log(jacobKatogo.cost());
