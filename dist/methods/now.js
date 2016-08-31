"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Now = (function (_super) {
    __extends(Now, _super);
    function Now() {
        _super.apply(this, arguments);
        this.methodName = 'now';
    }
    return Now;
}(method_expression_1.MethodExpression));
exports.Now = Now;
//# sourceMappingURL=now.js.map