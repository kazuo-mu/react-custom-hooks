import { useState } from 'react';

/**
 * Set 型のステートを管理するフック
 */
export const useSet = <Type>(): [
  Set<Type>,
  (items: Array<Type>) => void,
  (item: Type) => void,
  (item: Type) => void
] => {
  const [state, setState] = useState(new Set<Type>());

  /**
   * 値をセットする（主に初期化に使用）
   *
   * @param items 管理する値の配列形式
   */
  const set = (items: Array<Type>) => {
    setState(new Set(items));
  };

  /**
   * 値を追加する
   *
   * @param item 追加する値
   */
  const add = (item: Type) => {
    setState((prev) => new Set(prev).add(item));
  };

  /**
   * 値を削除する
   *
   * @param item 削除する値
   */
  const remove = (item: Type) => {
    setState((prev) => {
      const next = new Set(prev);
      next.delete(item);

      return next;
    });
  };

  return [state, set, add, remove];
};
