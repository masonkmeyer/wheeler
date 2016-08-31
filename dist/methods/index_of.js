"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var IndexOf = (function (_super) {
    __extends(IndexOf, _super);
    function IndexOf(left, right) {
        _super.call(this);
        this.methodName = 'indexof';
        this.expressions = [left, right];
    }
    return IndexOf;
}(method_expression_1.MethodExpression));
exports.IndexOf = IndexOf;
//# sourceMappingURL=index_of.js.map