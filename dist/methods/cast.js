var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Cast = (function (_super) {
    __extends(Cast, _super);
    function Cast(left, right) {
        _super.call(this);
        this.methodName = 'cast';
        this.expressions = [left];
        if (right) {
            this.expressions.push(right);
        }
    }
    return Cast;
})(method_expression_1.MethodExpression);
exports.Cast = Cast;
//# sourceMappingURL=cast.js.map