var expression_1 = require('./expression');
var odata_visitor_1 = require('./odata_visitor');
var and_1 = require('./filters/and');
var QueryBuilder = (function () {
    function QueryBuilder() {
        this.$filters = [];
    }
    QueryBuilder.prototype.any = function (param, ex) {
        this.$filters.push(expression_1.Expression.any(param, ex));
        return this;
    };
    QueryBuilder.prototype.filter = function (value) {
        this.$filters.push(value);
        return this;
    };
    QueryBuilder.prototype.equals = function (param, value) {
        this.$filters.push(expression_1.Expression.equals(param, value));
        return this;
    };
    QueryBuilder.prototype.contains = function (param, value) {
        this.$filters.push(expression_1.Expression.contains(param, value));
        return this;
    };
    QueryBuilder.prototype.lt = function (param, value) {
        this.$filters.push(expression_1.Expression.lt(param, value));
        return this;
    };
    QueryBuilder.prototype.lte = function (param, value) {
        this.$filters.push(expression_1.Expression.lte(param, value));
        return this;
    };
    QueryBuilder.prototype.gt = function (param, value) {
        this.$filters.push(expression_1.Expression.gt(param, value));
        return this;
    };
    QueryBuilder.prototype.gte = function (param, value) {
        this.$filters.push(expression_1.Expression.gte(param, value));
        return this;
    };
    QueryBuilder.prototype.multiply = function (left, right) {
        this.$filters.push(expression_1.Expression.multiply(left, right));
        return this;
    };
    QueryBuilder.prototype.top = function (limit) {
        this.$top = expression_1.Expression.top(limit);
        return this;
    };
    QueryBuilder.prototype.skip = function (num) {
        this.$skip = expression_1.Expression.skip(num);
        return this;
    };
    QueryBuilder.prototype.inlineCount = function () {
        this.$inlineCount = "allpages";
        return this;
    };
    QueryBuilder.prototype.orderBy = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        this.$orderBy = this.propertiesToStrings.apply(this, params).join();
        return this;
    };
    QueryBuilder.prototype.orderByDescending = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        this.$orderBy = this.propertiesToStrings.apply(this, params).join() + " desc";
        return this;
    };
    QueryBuilder.prototype.select = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        this.$select = this.propertiesToStrings.apply(this, params).join();
        return this;
    };
    QueryBuilder.prototype.search = function (value) {
        this.$search = value;
        return this;
    };
    QueryBuilder.prototype.expand = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        this.$expand = this.propertiesToStrings.apply(this, params).join();
        return this;
    };
    QueryBuilder.prototype.count = function () {
        this.$count = 'true';
        return this;
    };
    QueryBuilder.prototype.toQuery = function () {
        var expression;
        for (var _i = 0, _a = this.$filters; _i < _a.length; _i++) {
            var filter = _a[_i];
            expression = expression ? new and_1.And(expression, filter) : filter;
        }
        var odataSettings = {};
        if (this.$search) {
            odataSettings.$search = this.$search;
        }
        if (this.$filters && this.$filters.length) {
            odataSettings.$filter = this.expressionToString(expression);
        }
        if (this.$select) {
            odataSettings.$select = this.$select;
        }
        if (this.$top) {
            odataSettings.$top = this.expressionToString(this.$top);
        }
        if (this.$skip) {
            odataSettings.$skip = this.expressionToString(this.$skip);
        }
        if (this.$inlineCount) {
            odataSettings.$inlinecount = this.$inlineCount;
        }
        if (this.$orderBy) {
            odataSettings.$orderby = this.$orderBy;
        }
        if (this.$expand) {
            odataSettings.$expand = this.$expand;
        }
        if (this.$count) {
            odataSettings.$count = this.$count;
        }
        return odataSettings;
    };
    QueryBuilder.prototype.propertiesToStrings = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        var temp = [];
        for (var _a = 0; _a < params.length; _a++) {
            var param = params[_a];
            temp.push(expression_1.Expression.nameof(param));
        }
        return temp;
    };
    QueryBuilder.prototype.expressionToString = function (expression) {
        var visitor = new odata_visitor_1.ODataVisitor();
        expression.accept(visitor);
        return visitor.result();
    };
    return QueryBuilder;
})();
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=query_builder.js.map