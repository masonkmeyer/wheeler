"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var Floor = (function (_super) {
    __extends(Floor, _super);
    function Floor(ex) {
        _super.call(this);
        this.methodName = 'floor';
        this.expressions = [ex];
    }
    return Floor;
}(method_expression_1.MethodExpression));
exports.Floor = Floor;
//# sourceMappingURL=floor.js.map