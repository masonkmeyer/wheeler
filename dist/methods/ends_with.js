var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var EndsWith = (function (_super) {
    __extends(EndsWith, _super);
    function EndsWith(left, right) {
        _super.call(this);
        this.methodName = 'endswith';
        this.expressions = [left, right];
    }
    return EndsWith;
})(method_expression_1.MethodExpression);
exports.EndsWith = EndsWith;
//# sourceMappingURL=ends_with.js.map