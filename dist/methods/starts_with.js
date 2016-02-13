var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var StartsWith = (function (_super) {
    __extends(StartsWith, _super);
    function StartsWith(left, right) {
        _super.call(this);
        this.methodName = 'startswith';
        this.expressions = [left, right];
    }
    return StartsWith;
})(method_expression_1.MethodExpression);
exports.StartsWith = StartsWith;
//# sourceMappingURL=starts_with.js.map