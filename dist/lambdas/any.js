"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var lambda_expression_1 = require('../expressions/lambda_expression');
var Any = (function (_super) {
    __extends(Any, _super);
    function Any() {
        _super.apply(this, arguments);
        this.methodName = 'any';
    }
    return Any;
}(lambda_expression_1.LambdaExpression));
exports.Any = Any;
//# sourceMappingURL=any.js.map