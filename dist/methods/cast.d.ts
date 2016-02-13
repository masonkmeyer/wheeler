import { MethodExpression } from '../expressions/method_expression';
import { IExpression } from '../expressions/iexpression';
export declare class Cast extends MethodExpression {
    constructor(left: IExpression);
    constructor(left: IExpression, right: IExpression);
    methodName: string;
}
