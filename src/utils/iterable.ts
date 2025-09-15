export function groupBy<T extends {}>(
  items: Iterable<T>,
  getValue: (item: T) => number | string,
): Record<keyof any, T[]> {
  const groups = {} as Record<keyof any, T[]>;

  for (const item of items) {
    const value = getValue(item);

    if (groups[value]) {
      groups[value].push(item);
    } else {
      groups[value] = [item];
    }
  }

  return groups;
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
