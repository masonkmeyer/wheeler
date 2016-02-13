var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Length = (function (_super) {
    __extends(Length, _super);
    function Length(ex) {
        _super.call(this);
        this.methodName = 'length';
        this.expressions = [ex];
    }
    return Length;
})(method_expression_1.MethodExpression);
exports.Length = Length;
//# sourceMappingURL=length.js.map