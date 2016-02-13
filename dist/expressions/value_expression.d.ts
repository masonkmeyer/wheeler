import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class ValueExpression implements IExpression {
    private item;
    constructor(item: any);
    value(): any;
    accept(v: IExpressionVisitor): void;
}
