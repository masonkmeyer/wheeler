"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Date = (function (_super) {
    __extends(Date, _super);
    function Date(ex) {
        _super.call(this);
        this.methodName = 'date';
        this.expressions = [ex];
    }
    return Date;
}(method_expression_1.MethodExpression));
exports.Date = Date;
//# sourceMappingURL=date.js.map