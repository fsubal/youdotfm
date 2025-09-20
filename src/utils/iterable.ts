export interface Grouped<T> extends Record<keyof any, T[]> {}

/**
 * @example
 * ```typescript
 * const items = [
 *   { id: 1, category: 'A' },
 *   { id: 2, category: 'B' },
 *   { id: 3, category: 'A' },
 * ];
 *
 * const grouped = groupBy(items, ({ category }) => category);
 * // {
 * //   A: [{ id: 1, category: 'A' }, { id: 3, category: 'A' }],
 * //   B: [{ id: 2, category: 'B' }],
 * // }
 * ```
 */
export function groupBy<T extends {}>(
  items: Iterable<T>,
  fn: (item: T) => keyof Grouped<T>,
): Grouped<T> {
  const groups = {} as Grouped<T>;

  for (const item of items) {
    const value = fn(item);

    if (groups[value]) {
      groups[value].push(item);
    } else {
      groups[value] = [item];
    }
  }

  return groups;
}

/**
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#%E8%A7%A3%E8%AA%AC
 */
export const enum Ordering {
  Less = -1,
  Equal = 0,
  Greater = 1,
}

/**
 * `sort()`に渡す関数を組み立てるのに使う
 *
 * @example
 * ```typescript
 * items.sort(compareBy('id', 'asc'))
 * ```
 */
export function compareBy<K extends string>(key: K, sort: "asc" | "desc") {
  type Subject = { [key in K]: number };

  return function compare(a: Subject, b: Subject) {
    switch (sort) {
      case "asc":
        return a[key] - b[key];
      case "desc":
        return b[key] - a[key];
    }
  };
}
