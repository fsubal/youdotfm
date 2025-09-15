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
