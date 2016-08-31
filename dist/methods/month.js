"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Month = (function (_super) {
    __extends(Month, _super);
    function Month(ex) {
        _super.call(this);
        this.methodName = 'month';
        this.expressions = [ex];
    }
    return Month;
}(method_expression_1.MethodExpression));
exports.Month = Month;
//# sourceMappingURL=month.js.map