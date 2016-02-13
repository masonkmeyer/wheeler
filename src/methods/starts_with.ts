import {MethodExpression} from '../expressions/method_expression';
import {IExpression} from '../expressions/iexpression';

export class StartsWith extends MethodExpression {

    constructor(left: IExpression, right: IExpression) {
        super();

        this.expressions = [left, right];
    }

    public methodName: string = 'startswith';
}
