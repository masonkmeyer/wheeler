import {MethodExpression} from '../expressions/method_expression';
import {IExpression} from '../expressions/iexpression';

export class Now extends MethodExpression {
    public methodName: string = 'now';
}
