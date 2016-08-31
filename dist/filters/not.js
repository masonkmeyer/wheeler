"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var unary_expression_1 = require('../expressions/unary_expression');
var Not = (function (_super) {
    __extends(Not, _super);
    function Not() {
        _super.apply(this, arguments);
        this.operator = 'not ';
    }
    return Not;
}(unary_expression_1.UnaryExpression));
exports.Not = Not;
//# sourceMappingURL=not.js.map