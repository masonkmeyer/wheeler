"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var ToUpper = (function (_super) {
    __extends(ToUpper, _super);
    function ToUpper(ex) {
        _super.call(this);
        this.methodName = 'toupper';
        this.expressions = [ex];
    }
    return ToUpper;
}(method_expression_1.MethodExpression));
exports.ToUpper = ToUpper;
//# sourceMappingURL=to_upper.js.map