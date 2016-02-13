var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var binary_expression_1 = require('../expressions/binary_expression');
var NotEquals = (function (_super) {
    __extends(NotEquals, _super);
    function NotEquals() {
        _super.apply(this, arguments);
        this.operator = 'ne';
    }
    return NotEquals;
})(binary_expression_1.BinaryExpression);
exports.NotEquals = NotEquals;
//# sourceMappingURL=not_equals.js.map