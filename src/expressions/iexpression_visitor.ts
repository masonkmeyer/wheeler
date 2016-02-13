import {BinaryExpression} from './binary_expression';
import {UnaryExpression} from './unary_expression';
import {ValueExpression} from './value_expression';
import {MethodExpression} from './method_expression';
import {PropertyExpression} from './property_expression';
import {LambdaExpression} from './lambda_expression';

export interface IExpressionVisitor {
    visit(expression: BinaryExpression): void;
    visit(expression: UnaryExpression): void;
    visit(expression: ValueExpression): void;
    visit(expression: MethodExpression): void;
    visit(expression: PropertyExpression): void;
    visit(expression: LambdaExpression): void;
}
