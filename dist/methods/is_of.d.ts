import { MethodExpression } from '../expressions/method_expression';
import { IExpression } from '../expressions/iexpression';
export declare class IsOf extends MethodExpression {
    constructor(left: IExpression);
    methodName: string;
}
