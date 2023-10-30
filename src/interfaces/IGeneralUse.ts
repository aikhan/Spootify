export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

/***************************************************/
//Dependant - Used to indicate if a property is dependant on another
type SelectedOptional<
  Base,
  T extends (string | number | symbol) & keyof Base
> = {
  [Key in keyof Base]: Base[Key];
} & {
  [Key in T]: Base[Key];
};
type SelectedNever<Base, T extends string | number | symbol> = {
  [Key in keyof Base]: Base[Key];
} & {
  [Key in T]?: never;
};
export type Dependant<
  BaseAttributes,
  DependantAttributes extends keyof BaseAttributes
> =
  | SelectedOptional<BaseAttributes, DependantAttributes>
  | SelectedNever<BaseAttributes, DependantAttributes>;
/***************************************************/
/***************************************************/
// Require one or the other both not both
type Simplify<T> = T extends infer S ? { [K in keyof S]: S[K] } : never;
type NoneOf<T> = Simplify<{ [K in keyof T]?: never }>;
export type AtMostOneOf<T> =
  | NoneOf<T>
  | { [K in keyof T]: Simplify<Pick<T, K> & NoneOf<Omit<T, K>>> }[keyof T];

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
/***************************************************/
