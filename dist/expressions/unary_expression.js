"use strict";
var UnaryExpression = (function () {
    function UnaryExpression(left) {
        this.left = left;
        this.operator = '';
    }
    UnaryExpression.prototype.accept = function (v) {
        this.left.accept(v);
        v.visit(this);
    };
    return UnaryExpression;
}());
exports.UnaryExpression = UnaryExpression;
//# sourceMappingURL=unary_expression.js.map