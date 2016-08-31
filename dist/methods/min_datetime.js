"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var MinDateTime = (function (_super) {
    __extends(MinDateTime, _super);
    function MinDateTime() {
        _super.apply(this, arguments);
        this.methodName = 'mindatetime';
    }
    return MinDateTime;
}(method_expression_1.MethodExpression));
exports.MinDateTime = MinDateTime;
//# sourceMappingURL=min_datetime.js.map