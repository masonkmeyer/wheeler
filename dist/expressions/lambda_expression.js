var LambdaExpression = (function () {
    function LambdaExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    LambdaExpression.prototype.accept = function (v) {
        if (this.left) {
            this.left.accept(v);
        }
        if (this.right) {
            this.right.accept(v);
        }
        v.visit(this);
    };
    return LambdaExpression;
})();
exports.LambdaExpression = LambdaExpression;
//# sourceMappingURL=lambda_expression.js.map