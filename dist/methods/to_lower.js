var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var ToLower = (function (_super) {
    __extends(ToLower, _super);
    function ToLower(ex) {
        _super.call(this);
        this.methodName = 'tolower';
        this.expressions = [ex];
    }
    return ToLower;
})(method_expression_1.MethodExpression);
exports.ToLower = ToLower;
//# sourceMappingURL=to_lower.js.map