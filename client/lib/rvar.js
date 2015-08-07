
RVar = function(){
    this._dep = new Tracker.Dependency();
};

RVar.prototype.get = function(){
    this._dep.depend();
    return this._value;
};

RVar.prototype.set = function(value){
    this._dep.changed();
    this._value = value;
};
