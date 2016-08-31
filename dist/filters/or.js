"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var Or = (function (_super) {
    __extends(Or, _super);
    function Or() {
        _super.apply(this, arguments);
        this.operator = 'or';
    }
    return Or;
}(binary_expression_1.BinaryExpression));
exports.Or = Or;
//# sourceMappingURL=or.js.map