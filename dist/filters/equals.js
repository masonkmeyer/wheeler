"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var Equals = (function (_super) {
    __extends(Equals, _super);
    function Equals() {
        _super.apply(this, arguments);
        this.operator = 'eq';
    }
    return Equals;
}(binary_expression_1.BinaryExpression));
exports.Equals = Equals;
//# sourceMappingURL=equals.js.map