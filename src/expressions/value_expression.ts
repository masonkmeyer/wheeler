import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class ValueExpression implements IExpression {
    private item: any;
    constructor(item: any) {
        this.item = item;
    }

    public value(): any {
        return this.item;
    };

    public accept(v: IExpressionVisitor): void {
        v.visit(this);
    }
}
