"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Trim = (function (_super) {
    __extends(Trim, _super);
    function Trim(ex) {
        _super.call(this);
        this.methodName = 'trim';
        this.expressions = [ex];
    }
    return Trim;
}(method_expression_1.MethodExpression));
exports.Trim = Trim;
//# sourceMappingURL=trim.js.map