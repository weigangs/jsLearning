import {SwallowDelegate, EuropeanSwallowDelegate, AfricanSwallowDelegate, NarrowEuropeanSwallowDelegate} from './delegate.js'

class Bird{
    constructor(data) {
        this._name = data.name;
        this._plumage = data.plumage;

        this._speciesDelegate = this.selectSpeciesDelegate(data);
    }

    selectSpeciesDelegate(data) {
        switch(data.type) {
            case "EuropeanSwallow": return new EuropeanSwallowDelegate(data, this);
            case "AfricanSwallow": return new AfricanSwallowDelegate(data, this);
            case "NarrowEuropeanSwallow": return new NarrowEuropeanSwallowDelegate(data, this);
            default: return new SwallowDelegate(data, this);
        }
    }

    get name() {
        return this._name;
    }

    get plumage() {
        return this._speciesDelegate.plumage;
    }

    get airSpeedVelocity() {
        
        return this._speciesDelegate.airSpeedVelocity;
    }
}

class EuropeanSwallow extends Bird{
    get airSpeedVelocity() {
        return this._speciesDelegate.airSpeedVelocity;
    }
}

class AfricanSwallow extends Bird{

    get airSpeedVelocity() {
        return this._speciesDelegate.airSpeedVelocity;
    }
}

class NarrowEuropeanSwallow extends Bird{

    constructor(data) {
        super(data);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage() {
        this._speciesDelegate.plumage;
    }

    get airSpeedVelocity() {
        return this._speciesDelegate.plumage;
    }
}

function createBird(data) {
    return new Bird(data);
} 

export {
    createBird,
}