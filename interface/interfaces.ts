namespace Interfaces {

    export interface IEngine {
        start(callback: (startStatus: boolean, engineType: string) => void): void;
        stop(callback: (startStatus: boolean, engineType: string) => void): void;
    }

    export interface IAutoOptions {
        basePrice: number;
        engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
    }

    export interface ITruckOptions extends IAutoOptions {
        bedLength: string;
        fourByfour: boolean;
    }

    export class Engine implements IEngine {
        constructor(public horsePower: number, public engineType: string) {}

        start(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout( () => {
                callback(true, this.engineType);
            }, 1000)
        }
        stop(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout( () => {
                callback(true, this.engineType);
            }, 1000)
        }
    }

    export class CustomEngine implements IEngine {
        start(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout( () => {
                callback(true, 'custom engine');
            }, 1000)
        }
        stop(callback: (startStatus: boolean, engineType: string) => void) {
            window.setTimeout( () => {
                callback(true, 'custom engine');
            }, 1000)
        }
    }

    export class Accessory {
        constructor(public accessoryNumber: number, public title: string) {}
    }

    export class Auto {
        private _basePrice: number;
        private _engine: IEngine;
        state: string;
        make: string;
        model: string;
        year: number;
        accessoryList: string;

        constructor(options: IAutoOptions) {
            this._basePrice = options.basePrice;
            this._engine = options.engine;
            this.state = options.state;
            this.model = options.model;
            this.make = options.make;
            this.year = options.year;
        }

        calculateTotal(): number {
            var taxRate = .08;
            return this.basePrice + (taxRate * this.basePrice);
        }

        addAccessories(...accessories: Accessory[]) {
            this.accessoryList = '';
            for (var i = 0; i < accessories.length; i++) {
                var ac = accessories[i];
                this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
            }
        }

        getAccessoryList(): string {
            return this.accessoryList;
        }

        get basePrice(): number {
            return this._basePrice;
        }

        set basePrice(value: number) {
            if (value <= 0) throw 'price must be >= 0';
            this._basePrice = value;
        }

        get engine(): IEngine {
            return this._engine;
        }

        set engine(value: IEngine) {
            if (value == undefined) throw 'Please supply an engine.';
            this._engine = value;
        }
    }

    export class Truck extends Auto {
        bedLength: string;
        fourByfour: boolean;

        constructor(options: ITruckOptions) {
            super(options);
            this.bedLength = options.bedLength;
            this.fourByfour = options.fourByfour;
        }
        
    }

}

window.onload = function () {
    var truck = new Interfaces.Truck({
        engine: new Interfaces.Engine(250, 'V8'),
        basePrice: 25000,
        state: 'bola',
        make: 'xinhaihulian',
        model: 'fff',
        year: 2016,
        bedLength: 'short',
        fourByfour: true
    });

    alert(truck.bedLength);
}