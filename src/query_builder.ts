import {Expression} from './expression';
import {IExpression} from './expressions/iexpression';
import {ODataVisitor} from './odata_visitor';
import {And} from './filters/and';
import {IODataSettings} from './interfaces/IODataSettings';

export class QueryBuilder<T> {
  private $filters:IExpression[] = [];
  private $top:IExpression;
  private $skip:IExpression;
  private $orderBy: string;
  private $inlineCount: string;
  private $select: string;
  private $expand: string;
  private $count: string;
  private $search: string;

  public any<TValue>(param:(type: T) => any[], ex: IExpression): QueryBuilder<T> {
    this.$filters.push(Expression.any(param, ex));
    return this;
  }

  public filter(value: IExpression) : QueryBuilder<T> {
    this.$filters.push(value);
    return this;
  }

  public equals<TValue>(param:(type: T) => TValue, value: IExpression): QueryBuilder<T>
  public equals<TValue>(param:(type: T) => TValue, value: TValue): QueryBuilder<T>
  public equals<TValue>(param:(type: T) => TValue, value: any): QueryBuilder<T>
  {
    this.$filters.push(Expression.equals(param, value));
    return this;
  }

  public contains<TValue>(param:(type: T) => TValue, value: IExpression): QueryBuilder<T>
  public contains<TValue>(param:(type: T) => TValue, value: TValue): QueryBuilder<T>
  {
    this.$filters.push(Expression.contains(param, value));
    return this;
  }

  public lt<TValue>(param:(type: T) => TValue, value: any): QueryBuilder<T>
  {
    this.$filters.push(Expression.lt(param, value));
    return this;
  }

  public lte<TValue>(param:(type: T) => TValue, value: any): QueryBuilder<T>
  {
    this.$filters.push(Expression.lte(param, value));
    return this;
  }

  public gt<TValue>(param:(type: T) => TValue, value: any): QueryBuilder<T>
  {
    this.$filters.push(Expression.gt(param, value));
    return this;
  }

  public gte<TValue>(param:(type: T) => TValue, value: any): QueryBuilder<T>
  {
    this.$filters.push(Expression.gte(param, value));
    return this;
  }

  public multiply(left: number, right: number): QueryBuilder<T>{
    this.$filters.push(Expression.multiply(left, right));
    return this;
  }

  public top(limit: number): QueryBuilder<T> {
    this.$top = Expression.top(limit);
    return this;
  }

  public skip(num: number) : QueryBuilder<T> {
    this.$skip = Expression.skip(num);
    return this;
  }

  public inlineCount(): QueryBuilder<T> {
    this.$inlineCount = "allpages";
    return this;
  }

  public orderBy<TValue>(...params:((type: T) => TValue)[]): QueryBuilder<T> {
      this.$orderBy = this.propertiesToStrings(...params).join();
      return this;
  }

  public orderByDescending<TValue>(...params:((type: T) => TValue)[]): QueryBuilder<T> {
      this.$orderBy = `${this.propertiesToStrings(...params).join()} desc`;
      return this;
  }

  public select<TValue>(...params:((type: T) => TValue)[]): QueryBuilder<T> {
      this.$select = this.propertiesToStrings(...params).join();
      return this;
  }

  public search(value: string): QueryBuilder<T>  {
    this.$search = value;
    return this;
  }

  public expand <TValue>(...params:((type: T) => TValue)[]): QueryBuilder<T> {
    this.$expand = this.propertiesToStrings(...params).join();
    return this;
  }

  public count(): QueryBuilder<T> {
    this.$count = 'true';
    return this;
  }

  public toQuery(): IODataSettings {
    let expression:IExpression;

    for(let filter of this.$filters) {
      expression = expression ? new And(expression, filter) : filter;
    }

    let odataSettings: IODataSettings = {
    };

    if(this.$search) {
      odataSettings.$search = this.$search;
    }

    if(this.$filters && this.$filters.length)
    {
      odataSettings.$filter = this.expressionToString(expression);
    }

    if(this.$select) {
        odataSettings.$select = this.$select;
    }

    if(this.$top) {
      odataSettings.$top = this.expressionToString(this.$top);
    }

    if(this.$skip) {
      odataSettings.$skip = this.expressionToString(this.$skip);
    }

    if(this.$inlineCount) {
      odataSettings.$inlinecount = this.$inlineCount;
    }

    if(this.$orderBy) {
      odataSettings.$orderby = this.$orderBy;
    }

    if(this.$expand) {
      odataSettings.$expand = this.$expand;
    }

    if(this.$count) {
      odataSettings.$count = this.$count;
    }

    return odataSettings;
  }

  private propertiesToStrings<TValue>(...params:((type: T) => TValue)[]): string[]{
    let temp:string[] =[];

    for(let param of params) {
      temp.push(Expression.nameof(param));
    }

    return temp;
  }

  private expressionToString(expression:IExpression) {
    let visitor = new ODataVisitor();
    expression.accept(visitor);
    return visitor.result();
  }
}
