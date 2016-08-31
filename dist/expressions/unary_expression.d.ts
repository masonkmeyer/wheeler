import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class UnaryExpression implements IExpression, IODataOperator {
    private left;
    operator: string;
    constructor(left: IExpression);
    accept(v: IExpressionVisitor): void;
}
