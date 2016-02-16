var add_1 = require('./filters/add');
var and_1 = require('./filters/and');
var divide_1 = require('./filters/divide');
var equals_1 = require('./filters/equals');
var gt_1 = require('./filters/gt');
var gte_1 = require('./filters/gte');
var lt_1 = require('./filters/lt');
var lte_1 = require('./filters/lte');
var length_1 = require('./methods/length');
var modulo_1 = require('./filters/modulo');
var multiply_1 = require('./filters/multiply');
var not_equals_1 = require('./filters/not_equals');
var or_1 = require('./filters/or');
var Subtract_1 = require('./filters/Subtract');
var cast_1 = require('./methods/cast');
var unary_expression_1 = require('./expressions/unary_expression');
var value_expression_1 = require('./expressions/value_expression');
var property_expression_1 = require('./expressions/property_expression');
var contains_1 = require('./methods/contains');
var method_expression_1 = require('./expressions/method_expression');
var trim_1 = require('./methods/trim');
var now_1 = require('./methods/now');
var any_1 = require('./lambdas/any');
var Expression = (function () {
    function Expression() {
    }
    Expression.add = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new add_1.Add(left, new value_expression_1.ValueExpression(right));
    };
    Expression.and = function (left, right) {
        return new and_1.And(left, right);
    };
    Expression.divide = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new divide_1.Divide(left, new value_expression_1.ValueExpression(right));
    };
    ;
    Expression.equals = function (param, value) {
        var left;
        if (param.accept) {
            left = param;
        }
        else {
            left = new property_expression_1.PropertyExpression(Expression.nameof(param));
        }
        var right;
        if (value.accept) {
            right = value;
        }
        else {
            right = new value_expression_1.ValueExpression(value);
        }
        return new equals_1.Equals(left, right);
    };
    Expression.gt = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new gt_1.GreaterThan(left, new value_expression_1.ValueExpression(value));
    };
    Expression.gte = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new gte_1.GreaterThanOrEqualTo(left, new value_expression_1.ValueExpression(value));
    };
    Expression.lt = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new lt_1.LessThan(left, new value_expression_1.ValueExpression(value));
    };
    Expression.lte = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new lte_1.LessThanOrEqualTo(left, new value_expression_1.ValueExpression(value));
    };
    Expression.len = function (param) {
        var propName = Expression.nameof(param);
        return new length_1.Length(new property_expression_1.PropertyExpression(propName));
    };
    Expression.mod = function (left, right) {
        return new modulo_1.Modulo(new value_expression_1.ValueExpression(left), new value_expression_1.ValueExpression(right));
    };
    Expression.multiply = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new multiply_1.Multiply(left, new value_expression_1.ValueExpression(right));
    };
    Expression.nameof = function (param) {
        // Replace with nameof when typescript adds it.
        var varExtractor = new RegExp('return (.*);');
        // HACK: cast to a string.
        var m = varExtractor.exec(param + '');
        if (m == null) {
            throw new Error("Cannot find return type for param (value: " + param + ")");
        }
        var returnValue = m[1];
        // drop the first lambda (that's the root object)
        var splits = returnValue.split('.');
        splits.shift();
        return splits.join().replace(',', '/');
    };
    Expression.not_equals = function (param, value) {
        var propName = Expression.nameof(param);
        var right;
        if (value instanceof method_expression_1.MethodExpression) {
            right = value;
        }
        else {
            right = new value_expression_1.ValueExpression(value);
        }
        return new not_equals_1.NotEquals(new property_expression_1.PropertyExpression(propName), right);
    };
    Expression.or = function (left, right) {
        return new or_1.Or(left, right);
    };
    Expression.subtract = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new Subtract_1.Subtract(left, new value_expression_1.ValueExpression(right));
    };
    Expression.cast = function (type, param) {
        var exps = [];
        if (param) {
            var propName = Expression.nameof(param);
            exps.push(new property_expression_1.PropertyExpression(propName));
        }
        exps.push(new property_expression_1.PropertyExpression(type));
        return exps.length === 2 ? new cast_1.Cast(exps[0], exps[1]) : new cast_1.Cast(exps[0]);
    };
    Expression.top = function (param) {
        if (!param || param < 0) {
            throw new RangeError("Parameter must be greater than zero (value: " + param + ")");
        }
        return new unary_expression_1.UnaryExpression(new value_expression_1.ValueExpression(param));
    };
    Expression.skip = function (param) {
        if (!param || param < 0) {
            throw new RangeError("Parameter must be greater than zero (value: " + param + ")");
        }
        return new unary_expression_1.UnaryExpression(new value_expression_1.ValueExpression(param));
    };
    Expression.trim = function (v) {
        return new trim_1.Trim(new value_expression_1.ValueExpression(v));
    };
    Expression.now = function () {
        return new now_1.Now();
    };
    Expression.contains = function (param, value) {
        var propName = Expression.nameof(param);
        var right;
        if (value instanceof method_expression_1.MethodExpression) {
            right = value;
        }
        else {
            right = new value_expression_1.ValueExpression(value);
        }
        return new contains_1.Contains(new property_expression_1.PropertyExpression(propName), right);
    };
    Expression.any = function (param, ex) {
        var propName = Expression.nameof(param);
        return new any_1.Any(new property_expression_1.PropertyExpression(propName), ex);
    };
    Expression.expressionOrValue = function (value) {
        if (typeof value === 'function') {
            value = new property_expression_1.PropertyExpression(Expression.nameof(value));
        }
        else if (!value.accept) {
            value = new value_expression_1.ValueExpression(value);
        }
        return value;
    };
    return Expression;
})();
exports.Expression = Expression;
//# sourceMappingURL=expression.js.map