import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class UnaryExpression implements IExpression, IODataOperator {
    operator: string;
    private left;
    constructor(l: IExpression);
    accept(v: IExpressionVisitor): void;
}
