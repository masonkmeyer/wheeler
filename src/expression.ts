import {Add, And, Divide, Equals, GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo, Modulo, Multiply, NotEquals, Or, Subtract  } from './filters';
import {Cast, Length, Contains, Trim, Now} from './methods';
import {IExpression} from './expressions/iexpression';
import {UnaryExpression, BinaryExpression, ValueExpression, PropertyExpression, MethodExpression} from './expressions';
import {All, Any} from './lambdas';

export class Expression {
    public static add(left: number, right: number): IExpression
    public static add(left: IExpression, right: number): IExpression
    public static add(left: any, right: number) {
        left = Expression.expressionOrValue(left);
        return new Add(left, new ValueExpression(right));
    }

    public static and(left: IExpression, right: IExpression): IExpression {
        return new And(left, right);
    }

    public static divide(left: number, right: number): IExpression
    public static divide(left: IExpression, right: number): IExpression
    public static divide(left: any, right: number) {
        left = Expression.expressionOrValue(left);
        return new Divide(left, new ValueExpression(right));
    };

    public static equals<Type, T>(param: (type: Type) => T, value: IExpression): IExpression
    public static equals<Type, T>(param: (type: Type) => T, value: T): IExpression
    public static equals<Type, T>(param: (type: Type) => T, value: any): IExpression
    public static equals<Type, T>(param: IExpression, value: any)
    public static equals<Type, T>(param: any, value: any) {
        let left: any;

        if (param.accept) {
            left = param;
        } else {
            left = new PropertyExpression(Expression.nameof(param));
        }

        let right: any;
        if (value.accept) {
            right = value;
        } else {
            right = new ValueExpression(value);
        }

        return new Equals(left, right);
    }

    public static gt<Type, T>(left: (type: Type) => T, value: any): IExpression
    public static gt(left: IExpression, value: any): IExpression
    public static gt(left: any, value: any): IExpression {
        left = Expression.expressionOrValue(left);
        return new GreaterThan(left, new ValueExpression(value));
    }

    public static gte<Type, T>(left: (type: Type) => T, value: any): IExpression
    public static gte(left: IExpression, value: any): IExpression
    public static gte(left: any, value: any): IExpression {
        left = Expression.expressionOrValue(left);
        return new GreaterThanOrEqualTo(left, new ValueExpression(value));
    }

    public static lt<Type, T>(left: (type: Type) => T, value: any): IExpression
    public static lt(left: IExpression, value: any): IExpression
    public static lt(left: any, value: any): IExpression {
        left = Expression.expressionOrValue(left);
        return new LessThan(left, new ValueExpression(value));
    }

    public static lte<Type, T>(left: (type: Type) => T, value: any): IExpression
    public static lte(left: IExpression, value: any): IExpression
    public static lte(left: any, value: any): IExpression {
        left = Expression.expressionOrValue(left);
        return new LessThanOrEqualTo(left, new ValueExpression(value));
    }

    public static len<Type, T>(param: (type: Type) => T): IExpression {
        let propName = Expression.nameof(param);
        return new Length(new PropertyExpression(propName));
    }

    public static mod(left: number, right: number): IExpression {
        return new Modulo(new ValueExpression(left), new ValueExpression(right));
    }

    public static multiply(left: number, right: number): IExpression
    public static multiply(left: IExpression, right: number): IExpression
    public static multiply(left: any, right: number): IExpression {
        left = Expression.expressionOrValue(left);
        return new Multiply(left, new ValueExpression(right));
    }

    public static nameof<Type, T>(param: (type: Type) => T): string {
        // Replace with nameof when typescript adds it.
        let varExtractor = new RegExp('return (.*);');
        // HACK: cast to a string.
        let m = varExtractor.exec(param + '');
        if (m == null) {
            throw new Error(`Cannot find return type for param (value: ${param})`);
        }

        let returnValue = m[1];

        // drop the first lambda (that's the root object)
        let splits = returnValue.split('.');
        splits.shift();
        return splits.join().replace(',', '/');
    }

    public static not_equals<Type, T>(param: (type: Type) => T, value: IExpression): IExpression
    public static not_equals<Type, T>(param: (type: Type) => T, value: T): IExpression
    public static not_equals<Type, T>(param: (type: Type) => T, value: any): IExpression {
        let propName = Expression.nameof(param);
        let right: any;
        if (value instanceof MethodExpression) {
            right = value;
        } else {
            right = new ValueExpression(value);
        }

        return new NotEquals(new PropertyExpression(propName), right);
    }

    public static or(left: IExpression, right: IExpression): IExpression {
        return new Or(left, right);
    }

    public static subtract(left: number, right: any): IExpression
    public static subtract(left: IExpression, right: any): IExpression
    public static subtract(left: any, right: any): IExpression {
        left = Expression.expressionOrValue(left);
        return new Subtract(left, new ValueExpression(right));
    }

    public static cast<T, Type>(type: string, param?: (type: Type) => T): IExpression {
        let exps: IExpression[] = [];

        if (param) {
            let propName = Expression.nameof(param);
            exps.push(new PropertyExpression(propName));
        }

        exps.push(new PropertyExpression(type));

        return exps.length === 2 ? new Cast(exps[0], exps[1]) : new Cast(exps[0]);
    }

    public static top(param: number): IExpression {
        if (!param || param < 0) {
            throw new RangeError(`Parameter must be greater than zero (value: ${param})`);
        }

        return new UnaryExpression(new ValueExpression(param));
    }

    public static skip(param: number): IExpression {
        if (!param || param < 0) {
            throw new RangeError(`Parameter must be greater than zero (value: ${param})`);
        }

        return new UnaryExpression(new ValueExpression(param));
    }

    public static trim(v: string): IExpression {
        return new Trim(new ValueExpression(v));
    }

    public static now(): IExpression {
        return new Now();
    }

    public static contains<Type, T>(param: (type: Type) => T, value: T): IExpression
    public static contains<Type, T>(param: (type: Type) => T, value: IExpression): IExpression
    public static contains<Type, T>(param: (type: Type) => T, value: any): IExpression {
        let propName = Expression.nameof(param);
        let right: any;
        if (value instanceof MethodExpression) {
            right = value;
        } else {
            right = new ValueExpression(value);
        }

        return new Contains(new PropertyExpression(propName), right);
    }

    public static any<Type, T>(param: (type: Type) => T, ex: IExpression): IExpression {
        let propName = Expression.nameof(param);
        return new Any(new PropertyExpression(propName), ex);
    }

    private static expressionOrValue(value: any): IExpression {
        if (typeof value === 'function') {
            value = new PropertyExpression(Expression.nameof(value));
        } else if (!value.accept) {
            value = new ValueExpression(value)
        }

        return value;
    }
}
