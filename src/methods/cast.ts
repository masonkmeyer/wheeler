import {MethodExpression} from '../expressions/method_expression';
import {IExpression} from '../expressions/iexpression';

export class Cast extends MethodExpression {
    constructor(left: IExpression)
    constructor(left: IExpression, right: IExpression)
    constructor(left: IExpression, right?: IExpression) {
        super();

        this.expressions = [left];

        if (right) {
            this.expressions.push(right);
        }
    }

    public methodName: string = 'cast';
}
