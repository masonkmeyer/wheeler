import {MethodExpression} from '../expressions/method_expression';
import {IExpression} from '../expressions/iexpression';

export class Substring extends MethodExpression {

    constructor(left: IExpression, right: IExpression)
    constructor(left: IExpression, right: IExpression, length?: IExpression) {
        super();

        this.expressions = [left, right];
        if (length) {
            this.expressions.push(length);
        }
    }

    public methodName: string = 'substring';
}
