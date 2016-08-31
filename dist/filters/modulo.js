"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var Modulo = (function (_super) {
    __extends(Modulo, _super);
    function Modulo() {
        _super.apply(this, arguments);
        this.operator = 'mod';
    }
    return Modulo;
}(binary_expression_1.BinaryExpression));
exports.Modulo = Modulo;
//# sourceMappingURL=modulo.js.map