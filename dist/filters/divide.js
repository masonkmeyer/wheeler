var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var Divide = (function (_super) {
    __extends(Divide, _super);
    function Divide() {
        _super.apply(this, arguments);
        this.operator = 'div';
    }
    return Divide;
})(binary_expression_1.BinaryExpression);
exports.Divide = Divide;
//# sourceMappingURL=divide.js.map