import { MethodExpression } from '../expressions/method_expression';
import { IExpression } from '../expressions/iexpression';
export declare class Time extends MethodExpression {
    constructor(ex: IExpression);
    methodName: string;
}