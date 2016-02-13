var UnaryExpression = (function () {
    function UnaryExpression(l) {
        this.operator = '';
        this.left = l;
    }
    UnaryExpression.prototype.accept = function (v) {
        this.left.accept(v);
        v.visit(this);
    };
    return UnaryExpression;
})();
exports.UnaryExpression = UnaryExpression;
//# sourceMappingURL=unary_expression.js.map