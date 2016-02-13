var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Concat = (function (_super) {
    __extends(Concat, _super);
    function Concat(left, right) {
        _super.call(this);
        this.methodName = 'concat';
        this.expressions = [left, right];
    }
    return Concat;
})(method_expression_1.MethodExpression);
exports.Concat = Concat;
//# sourceMappingURL=concat.js.map