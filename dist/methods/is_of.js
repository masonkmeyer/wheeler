var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var IsOf = (function (_super) {
    __extends(IsOf, _super);
    function IsOf(left, right) {
        _super.call(this);
        this.methodName = 'isof';
        this.expressions = [left];
        if (right) {
            this.expressions.push(right);
        }
    }
    return IsOf;
})(method_expression_1.MethodExpression);
exports.IsOf = IsOf;
//# sourceMappingURL=is_of.js.map