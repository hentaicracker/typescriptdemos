namespace DefiningClasses {
    /**
     * Engine
     */
    class Engine {
        constructor(public horsePower: number, public engineType: string) {}
    }

    /**
     * Car
     */
    class Car {
        private _engine: Engine;
        constructor(engine: Engine) {
            this._engine = engine;
        }
        
        public get engine() : Engine {
            return this._engine;
        }

        
        public set engine(value : Engine) {
            if (value == undefined) {
                throw 'Please supply an engine';
            }
            this._engine = value;
        }
        
        start(): void {
            render("car engine start" + this._engine.engineType);
        }

    }

    function render(someStr: string) {
        document.getElementById('container').innerHTML += someStr + '<br>';
    }

    window.onload = function () {
        var engine = new Engine(300, 'V8');
        var car = new Car(engine);
        render(car.engine.engineType);
        car.start();
    }
}