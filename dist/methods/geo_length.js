var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var GeoLength = (function (_super) {
    __extends(GeoLength, _super);
    function GeoLength(ex) {
        _super.call(this);
        this.methodName = 'geo.length';
        this.expressions = [ex];
    }
    return GeoLength;
})(method_expression_1.MethodExpression);
exports.GeoLength = GeoLength;
//# sourceMappingURL=geo_length.js.map