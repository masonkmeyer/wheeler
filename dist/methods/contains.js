var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Contains = (function (_super) {
    __extends(Contains, _super);
    function Contains(left, right) {
        _super.call(this);
        this.methodName = 'contains';
        this.expressions = [left, right];
    }
    return Contains;
})(method_expression_1.MethodExpression);
exports.Contains = Contains;
//# sourceMappingURL=contains.js.map