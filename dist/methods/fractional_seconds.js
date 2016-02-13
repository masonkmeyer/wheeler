var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var FractionalSeconds = (function (_super) {
    __extends(FractionalSeconds, _super);
    function FractionalSeconds(ex) {
        _super.call(this);
        this.methodName = 'fractionalseconds';
        this.expressions = [ex];
    }
    return FractionalSeconds;
})(method_expression_1.MethodExpression);
exports.FractionalSeconds = FractionalSeconds;
//# sourceMappingURL=fractional_seconds.js.map