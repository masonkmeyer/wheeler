"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var GreaterThan = (function (_super) {
    __extends(GreaterThan, _super);
    function GreaterThan() {
        _super.apply(this, arguments);
        this.operator = 'gt';
    }
    return GreaterThan;
}(binary_expression_1.BinaryExpression));
exports.GreaterThan = GreaterThan;
//# sourceMappingURL=gt.js.map