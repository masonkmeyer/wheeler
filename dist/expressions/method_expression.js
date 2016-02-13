var MethodExpression = (function () {
    function MethodExpression() {
        this.expressions = [];
    }
    MethodExpression.prototype.accept = function (v) {
        for (var _i = 0, _a = this.expressions; _i < _a.length; _i++) {
            var ex = _a[_i];
            ex.accept(v);
        }
        v.visit(this);
    };
    return MethodExpression;
})();
exports.MethodExpression = MethodExpression;
//# sourceMappingURL=method_expression.js.map