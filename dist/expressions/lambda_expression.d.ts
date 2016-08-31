import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class LambdaExpression implements IExpression {
    private left;
    private right;
    methodName: string;
    constructor(left: IExpression, right: IExpression);
    accept(v: IExpressionVisitor): void;
}
