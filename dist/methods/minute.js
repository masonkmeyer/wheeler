var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Minute = (function (_super) {
    __extends(Minute, _super);
    function Minute(ex) {
        _super.call(this);
        this.methodName = 'minute';
        this.expressions = [ex];
    }
    return Minute;
})(method_expression_1.MethodExpression);
exports.Minute = Minute;
//# sourceMappingURL=minute.js.map