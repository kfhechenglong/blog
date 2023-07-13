function SuperType () {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 现在让之类继承父类SuperType

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

const instance = new SubType();

console.log(instance.getSuperValue());