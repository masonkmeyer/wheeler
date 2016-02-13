import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class PropertyExpression implements IExpression {
    private item;
    constructor(item: any);
    value(): any;
    accept(v: IExpressionVisitor): void;
}
