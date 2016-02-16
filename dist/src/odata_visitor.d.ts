import { BinaryExpression } from './expressions/binary_expression';
import { IExpressionVisitor } from './expressions/iexpression_visitor';
import { MethodExpression } from './expressions/method_expression';
import { UnaryExpression } from './expressions/unary_expression';
import { ValueExpression } from './expressions/value_expression';
import { PropertyExpression } from './expressions/property_expression';
import { LambdaExpression } from './expressions/lambda_expression';
export declare class ODataVisitor implements IExpressionVisitor {
    private items;
    result(): string;
    visit(expression: MethodExpression): void;
    visit(expression: ValueExpression): void;
    visit(expression: UnaryExpression): void;
    visit(expression: BinaryExpression): void;
    visit(expression: PropertyExpression): void;
    visit(expression: LambdaExpression): void;
    private visitBinaryExpression(ex);
    private visitUnaryExpression(ex);
    private visitValueExpression(ex);
    private visitPropertyExpression(ex);
    private visitMethodExpression(ex);
    private visitLambdaExpression(ex);
}
