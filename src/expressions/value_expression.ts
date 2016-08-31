import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class ValueExpression implements IExpression {
    constructor(private item: any) {
    }

    public value(): any {
        return this.item;
    };

    public accept(v: IExpressionVisitor): void {
        v.visit(this);
    }
}
