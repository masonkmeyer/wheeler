import { MethodExpression } from '../expressions/method_expression';
import { IExpression } from '../expressions/iexpression';
export declare class IndexOf extends MethodExpression {
    constructor(left: IExpression, right: IExpression);
    methodName: string;
}
