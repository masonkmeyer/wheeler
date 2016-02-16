import {BinaryExpression} from './expressions/binary_expression';
import {IExpressionVisitor} from './expressions/iexpression_visitor';
import {MethodExpression} from './expressions/method_expression';
import {UnaryExpression} from './expressions/unary_expression';
import {ValueExpression} from './expressions/value_expression';
import {PropertyExpression} from './expressions/property_expression';
import {LambdaExpression} from './expressions/lambda_expression';

export class ODataVisitor implements IExpressionVisitor {
    private items: string[] = [];

    public result(): string {
        let result: string = '';
        if (this.items.length) {
            result = this.items[this.items.length - 1];
        }

        return result;
    };

    public visit(expression: MethodExpression): void
    public visit(expression: ValueExpression): void
    public visit(expression: UnaryExpression): void
    public visit(expression: BinaryExpression): void
    public visit(expression: PropertyExpression): void
    public visit(expression: LambdaExpression): void
    public visit(expression = null): void {
        if (expression) {
            let constructorName = (<any>expression.constructor).name;

            if (expression instanceof BinaryExpression) {
                this.visitBinaryExpression(expression);
            } else if (expression instanceof UnaryExpression) {
                this.visitUnaryExpression(expression);
            } else if (expression instanceof ValueExpression) {
                this.visitValueExpression(expression);
            } else if (expression instanceof MethodExpression) {
                this.visitMethodExpression(expression);
            } else if (expression instanceof PropertyExpression) {
                this.visitPropertyExpression(expression);
            } else if (expression instanceof LambdaExpression) {
                this.visitLambdaExpression(expression);
            }
        }
    }

    private visitBinaryExpression(ex: BinaryExpression): void {
        let right = this.items.pop();
        let left = this.items.pop();
        this.items.push(`${left} ${ex.operator} ${right}`);
    }

    private visitUnaryExpression(ex: UnaryExpression): void {
        let left = this.items.pop();
        this.items.push(`${ex.operator}${left}`);
    }

    private visitValueExpression(ex: ValueExpression): void {
        let result: string;
        let val = ex.value();
        if (val instanceof Date) {
            result = `datetime'${val.toISOString()}'`;
        } else if (typeof val === 'string') {
            let isRegex = val.match(/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/);
            result = isRegex ? `guid'${ex.value().toString()}'` : `'${ex.value().toString()}'`;
        } else {
            result = val.toString();
        }

        this.items.push(result);
    }

    private visitPropertyExpression(ex: PropertyExpression): void {
        this.items.push(ex.value().toString());
    }

    private visitMethodExpression(ex: MethodExpression): void {
        let results = [];
        for (let x = 0; x < ex.expressions.length; x++) {
            results.push(this.items.pop());
        }

        this.items.push(`${ex.methodName}(${results.reverse().join(',')})`);
    }

    private visitLambdaExpression(ex: LambdaExpression): void {
        let right = this.items.pop();
        let left = this.items.pop();
        this.items.push(`${left}/${ex.methodName}(x:x/${right})`);
    }
}
