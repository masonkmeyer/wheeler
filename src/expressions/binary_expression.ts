import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class BinaryExpression implements IExpression, IODataOperator {
    public operator: string;

    constructor(private left: IExpression, private right: IExpression) {
    }

    public accept(v: IExpressionVisitor): void {
        if (this.left) {
            this.left.accept(v);
        }

        if (this.right) {
            this.right.accept(v);
        }

        v.visit(this);
    }
}
