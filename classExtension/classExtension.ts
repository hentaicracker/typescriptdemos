class Engine {
    constructor(public horsePower: number, public engineType: string) {}

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000)
    }

    stop(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000)
    }
}

/**
 * Accessory
 */
class Accessory {
    constructor(public accessNumber: number, public title: string) {}
}

/**
 * Auto
 */
class Auto {
    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model: string) {
        this.make = make;
        this.engine = engine;
        this.basePrice = basePrice;
        this.model = model;    
    }

    addAccessories(...accessories: Accessory[]): void {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessNumber + ' ' + ac.title + '<br>'; 
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get engine():Engine {
        return this._engine;
    }
    set engine(value: Engine) {
        if(value == undefined) throw 'please supply an engine';
        this._engine = value;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be > 0';
        this._basePrice = value;
    }
}

class Truck extends Auto{
    bedLength: string;
    fourByfour: boolean;

    constructor(basePrice: number, engine: Engine, make: string, model: string, bedLength: string, fourByfour: boolean) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByfour = fourByfour;
    }
}

window.onload = function () {
    var truck = new Truck(4000, new Engine(300, 'V8'), 'chevy', 'silver', 'long', true);
    truck.addAccessories(new Accessory(5, 'sun'), new Accessory(12, 'moon'));
    truck.engine.start((status: boolean, engineType: string) => {
        document.getElementById('container').innerHTML = engineType + 'was started';
    })
}