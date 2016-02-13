import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class LambdaExpression implements IExpression {
    methodName: string;
    private left;
    private right;
    constructor(left: IExpression, right: IExpression);
    accept(v: IExpressionVisitor): void;
}
