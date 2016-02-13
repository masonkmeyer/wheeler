import {IExpressionVisitor} from './iexpression_visitor';

export interface IExpression {
    accept(v: IExpressionVisitor): void;
}
