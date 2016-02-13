import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class MethodExpression implements IExpression {
    public methodName: string;
    public expressions: IExpression[] = [];

    public accept(v: IExpressionVisitor): void {
        for (let ex of this.expressions) {
            ex.accept(v);
        }

        v.visit(this);
    }
}
