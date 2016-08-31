"use strict";
var PropertyExpression = (function () {
    function PropertyExpression(item) {
        this.item = item;
    }
    PropertyExpression.prototype.value = function () {
        return this.item;
    };
    ;
    PropertyExpression.prototype.accept = function (v) {
        v.visit(this);
    };
    return PropertyExpression;
}());
exports.PropertyExpression = PropertyExpression;
//# sourceMappingURL=property_expression.js.map