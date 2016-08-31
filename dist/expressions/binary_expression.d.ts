import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class BinaryExpression implements IExpression, IODataOperator {
    private left;
    private right;
    operator: string;
    constructor(left: IExpression, right: IExpression);
    accept(v: IExpressionVisitor): void;
}
