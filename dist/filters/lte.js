"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var LessThanOrEqualTo = (function (_super) {
    __extends(LessThanOrEqualTo, _super);
    function LessThanOrEqualTo() {
        _super.apply(this, arguments);
        this.operator = 'le';
    }
    return LessThanOrEqualTo;
}(binary_expression_1.BinaryExpression));
exports.LessThanOrEqualTo = LessThanOrEqualTo;
//# sourceMappingURL=lte.js.map