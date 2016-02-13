var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var And = (function (_super) {
    __extends(And, _super);
    function And() {
        _super.apply(this, arguments);
        this.operator = 'and';
    }
    return And;
})(binary_expression_1.BinaryExpression);
exports.And = And;
//# sourceMappingURL=and.js.map