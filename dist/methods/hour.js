"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Hour = (function (_super) {
    __extends(Hour, _super);
    function Hour(ex) {
        _super.call(this);
        this.methodName = 'hour';
        this.expressions = [ex];
    }
    return Hour;
}(method_expression_1.MethodExpression));
exports.Hour = Hour;
//# sourceMappingURL=hour.js.map