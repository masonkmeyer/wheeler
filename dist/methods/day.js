var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Day = (function (_super) {
    __extends(Day, _super);
    function Day(ex) {
        _super.call(this);
        this.methodName = 'day';
        this.expressions = [ex];
    }
    return Day;
})(method_expression_1.MethodExpression);
exports.Day = Day;
//# sourceMappingURL=day.js.map