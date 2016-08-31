"use strict";
var binary_expression_1 = require('./expressions/binary_expression');
var method_expression_1 = require('./expressions/method_expression');
var unary_expression_1 = require('./expressions/unary_expression');
var value_expression_1 = require('./expressions/value_expression');
var property_expression_1 = require('./expressions/property_expression');
var lambda_expression_1 = require('./expressions/lambda_expression');
var ODataVisitor = (function () {
    function ODataVisitor() {
        this.items = [];
    }
    ODataVisitor.prototype.result = function () {
        var result = '';
        if (this.items.length) {
            result = this.items[this.items.length - 1];
        }
        return result;
    };
    ;
    ODataVisitor.prototype.visit = function (expression) {
        if (expression === void 0) { expression = null; }
        if (expression) {
            var constructorName = expression.constructor.name;
            if (expression instanceof binary_expression_1.BinaryExpression) {
                this.visitBinaryExpression(expression);
            }
            else if (expression instanceof unary_expression_1.UnaryExpression) {
                this.visitUnaryExpression(expression);
            }
            else if (expression instanceof value_expression_1.ValueExpression) {
                this.visitValueExpression(expression);
            }
            else if (expression instanceof method_expression_1.MethodExpression) {
                this.visitMethodExpression(expression);
            }
            else if (expression instanceof property_expression_1.PropertyExpression) {
                this.visitPropertyExpression(expression);
            }
            else if (expression instanceof lambda_expression_1.LambdaExpression) {
                this.visitLambdaExpression(expression);
            }
        }
    };
    ODataVisitor.prototype.visitBinaryExpression = function (ex) {
        var right = this.items.pop();
        var left = this.items.pop();
        this.items.push(left + " " + ex.operator + " " + right);
    };
    ODataVisitor.prototype.visitUnaryExpression = function (ex) {
        var left = this.items.pop();
        this.items.push("" + ex.operator + left);
    };
    ODataVisitor.prototype.visitValueExpression = function (ex) {
        var result;
        var val = ex.value();
        if (val instanceof Date) {
            result = "datetime'" + val.toISOString() + "'";
        }
        else if (typeof val === 'string') {
            var isRegex = val.match(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/);
            result = isRegex ? "guid'" + ex.value().toString() + "'" : "'" + ex.value().toString() + "'";
        }
        else {
            result = val.toString();
        }
        this.items.push(result);
    };
    ODataVisitor.prototype.visitPropertyExpression = function (ex) {
        this.items.push(ex.value().toString());
    };
    ODataVisitor.prototype.visitMethodExpression = function (ex) {
        var results = [];
        for (var x = 0; x < ex.expressions.length; x++) {
            results.push(this.items.pop());
        }
        this.items.push(ex.methodName + "(" + results.reverse().join(',') + ")");
    };
    ODataVisitor.prototype.visitLambdaExpression = function (ex) {
        var right = this.items.pop();
        var left = this.items.pop();
        this.items.push(left + "/" + ex.methodName + "(x:x/" + right + ")");
    };
    return ODataVisitor;
}());
exports.ODataVisitor = ODataVisitor;
//# sourceMappingURL=odata_visitor.js.map