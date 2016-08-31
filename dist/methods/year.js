"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Year = (function (_super) {
    __extends(Year, _super);
    function Year(ex) {
        _super.call(this);
        this.methodName = 'year';
        this.expressions = [ex];
    }
    return Year;
}(method_expression_1.MethodExpression));
exports.Year = Year;
//# sourceMappingURL=year.js.map