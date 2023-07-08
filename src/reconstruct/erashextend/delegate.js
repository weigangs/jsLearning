class SwallowDelegate{
    constructor(data, bird) {
        this._bird = bird;
    }

    get plumage() {
        return this._bird._plumage || "average";
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallowDelegate extends SwallowDelegate{
    
    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallowDelegate extends SwallowDelegate{
    constructor(data, bird) {
        super(data, bird);
        this._numberOfCoconuts = data.numberOfCoconuts;
    }

    get airSpeedVelocity() {
        return 40-2*this._numberOfCoconuts;
    }
}

class NarrowEuropeanSwallowDelegate extends SwallowDelegate{
    
    constructor(data, bird) {
        super(data, bird);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage() {
        if (this._voltage > 100) return "scorched";
        else return this._plumage || "beautiful";
    }

    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage/10;
    }
}

export{
    SwallowDelegate, 
    EuropeanSwallowDelegate, 
    AfricanSwallowDelegate, 
    NarrowEuropeanSwallowDelegate
}