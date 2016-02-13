import { IExpression } from './iexpression';
import { IExpressionVisitor } from './iexpression_visitor';
export declare class MethodExpression implements IExpression {
    methodName: string;
    expressions: IExpression[];
    accept(v: IExpressionVisitor): void;
}
