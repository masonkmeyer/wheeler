var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var method_expression_1 = require('../expressions/method_expression');
var GeoDistance = (function (_super) {
    __extends(GeoDistance, _super);
    function GeoDistance(left, right) {
        _super.call(this);
        this.methodName = 'geo.distance';
        this.expressions = [left, right];
    }
    return GeoDistance;
})(method_expression_1.MethodExpression);
exports.GeoDistance = GeoDistance;
//# sourceMappingURL=geo_distance.js.map