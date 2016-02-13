import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class UnaryExpression implements IExpression, IODataOperator {
    public operator: string = '';
    private left: IExpression;

    constructor(l: IExpression) {
        this.left = l;
    }

    public accept(v: IExpressionVisitor): void {
        this.left.accept(v);
        v.visit(this);
    }
}
