var ValueExpression = (function () {
    function ValueExpression(item) {
        this.item = item;
    }
    ValueExpression.prototype.value = function () {
        return this.item;
    };
    ;
    ValueExpression.prototype.accept = function (v) {
        v.visit(this);
    };
    return ValueExpression;
})();
exports.ValueExpression = ValueExpression;
//# sourceMappingURL=value_expression.js.map