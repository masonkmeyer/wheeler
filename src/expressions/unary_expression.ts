import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class UnaryExpression implements IExpression, IODataOperator {
    public operator: string = '';

    constructor(private left: IExpression) {
    }

    public accept(v: IExpressionVisitor): void {
        this.left.accept(v);
        v.visit(this);
    }
}
