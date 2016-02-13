import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class BinaryExpression implements IExpression, IODataOperator {
    operator: string;
    private left;
    private right;
    constructor(left: IExpression, right: IExpression);
    accept(v: IExpressionVisitor): void;
}
