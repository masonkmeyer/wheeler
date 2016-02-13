var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var Multiply = (function (_super) {
    __extends(Multiply, _super);
    function Multiply() {
        _super.apply(this, arguments);
        this.operator = 'mul';
    }
    return Multiply;
})(binary_expression_1.BinaryExpression);
exports.Multiply = Multiply;
//# sourceMappingURL=multiply.js.map