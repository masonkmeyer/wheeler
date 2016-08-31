"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Ceiling = (function (_super) {
    __extends(Ceiling, _super);
    function Ceiling(ex) {
        _super.call(this);
        this.methodName = 'ceiling';
        this.expressions = [ex];
    }
    return Ceiling;
}(method_expression_1.MethodExpression));
exports.Ceiling = Ceiling;
//# sourceMappingURL=ceiling.js.map