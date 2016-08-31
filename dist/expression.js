"use strict";
var filters_1 = require('./filters');
var methods_1 = require('./methods');
var expressions_1 = require('./expressions');
var lambdas_1 = require('./lambdas');
var Expression = (function () {
    function Expression() {
    }
    Expression.add = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new filters_1.Add(left, new expressions_1.ValueExpression(right));
    };
    Expression.and = function (left, right) {
        return new filters_1.And(left, right);
    };
    Expression.divide = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new filters_1.Divide(left, new expressions_1.ValueExpression(right));
    };
    ;
    Expression.equals = function (param, value) {
        var left;
        if (param.accept) {
            left = param;
        }
        else {
            left = new expressions_1.PropertyExpression(Expression.nameof(param));
        }
        var right;
        if (value.accept) {
            right = value;
        }
        else {
            right = new expressions_1.ValueExpression(value);
        }
        return new filters_1.Equals(left, right);
    };
    Expression.gt = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new filters_1.GreaterThan(left, new expressions_1.ValueExpression(value));
    };
    Expression.gte = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new filters_1.GreaterThanOrEqualTo(left, new expressions_1.ValueExpression(value));
    };
    Expression.lt = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new filters_1.LessThan(left, new expressions_1.ValueExpression(value));
    };
    Expression.lte = function (left, value) {
        left = Expression.expressionOrValue(left);
        return new filters_1.LessThanOrEqualTo(left, new expressions_1.ValueExpression(value));
    };
    Expression.len = function (param) {
        var propName = Expression.nameof(param);
        return new methods_1.Length(new expressions_1.PropertyExpression(propName));
    };
    Expression.mod = function (left, right) {
        return new filters_1.Modulo(new expressions_1.ValueExpression(left), new expressions_1.ValueExpression(right));
    };
    Expression.multiply = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new filters_1.Multiply(left, new expressions_1.ValueExpression(right));
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
        if (value instanceof expressions_1.MethodExpression) {
            right = value;
        }
        else {
            right = new expressions_1.ValueExpression(value);
        }
        return new filters_1.NotEquals(new expressions_1.PropertyExpression(propName), right);
    };
    Expression.or = function (left, right) {
        return new filters_1.Or(left, right);
    };
    Expression.subtract = function (left, right) {
        left = Expression.expressionOrValue(left);
        return new filters_1.Subtract(left, new expressions_1.ValueExpression(right));
    };
    Expression.cast = function (type, param) {
        var exps = [];
        if (param) {
            var propName = Expression.nameof(param);
            exps.push(new expressions_1.PropertyExpression(propName));
        }
        exps.push(new expressions_1.PropertyExpression(type));
        return exps.length === 2 ? new methods_1.Cast(exps[0], exps[1]) : new methods_1.Cast(exps[0]);
    };
    Expression.top = function (param) {
        if (!param || param < 0) {
            throw new RangeError("Parameter must be greater than zero (value: " + param + ")");
        }
        return new expressions_1.UnaryExpression(new expressions_1.ValueExpression(param));
    };
    Expression.skip = function (param) {
        if (!param || param < 0) {
            throw new RangeError("Parameter must be greater than zero (value: " + param + ")");
        }
        return new expressions_1.UnaryExpression(new expressions_1.ValueExpression(param));
    };
    Expression.trim = function (v) {
        return new methods_1.Trim(new expressions_1.ValueExpression(v));
    };
    Expression.now = function () {
        return new methods_1.Now();
    };
    Expression.contains = function (param, value) {
        var propName = Expression.nameof(param);
        var right;
        if (value instanceof expressions_1.MethodExpression) {
            right = value;
        }
        else {
            right = new expressions_1.ValueExpression(value);
        }
        return new methods_1.Contains(new expressions_1.PropertyExpression(propName), right);
    };
    Expression.any = function (param, ex) {
        var propName = Expression.nameof(param);
        return new lambdas_1.Any(new expressions_1.PropertyExpression(propName), ex);
    };
    Expression.expressionOrValue = function (value) {
        if (typeof value === 'function') {
            value = new expressions_1.PropertyExpression(Expression.nameof(value));
        }
        else if (!value.accept) {
            value = new expressions_1.ValueExpression(value);
        }
        return value;
    };
    return Expression;
}());
exports.Expression = Expression;
//# sourceMappingURL=expression.js.map