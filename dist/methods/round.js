"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Round = (function (_super) {
    __extends(Round, _super);
    function Round(ex) {
        _super.call(this);
        this.methodName = 'round';
        this.expressions = [ex];
    }
    return Round;
}(method_expression_1.MethodExpression));
exports.Round = Round;
//# sourceMappingURL=round.js.map