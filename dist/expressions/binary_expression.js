var BinaryExpression = (function () {
    function BinaryExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    BinaryExpression.prototype.accept = function (v) {
        if (this.left) {
            this.left.accept(v);
        }
        if (this.right) {
            this.right.accept(v);
        }
        v.visit(this);
    };
    return BinaryExpression;
})();
exports.BinaryExpression = BinaryExpression;
//# sourceMappingURL=binary_expression.js.map