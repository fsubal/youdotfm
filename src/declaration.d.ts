declare type RangeOf<T extends number> = [T, T?];

declare type Branded<T, B extends string> = T & { [K in B]: never };

declare type JPY = Branded<number, "JPY">;

declare type ISO8601 = Branded<string, "ISO8601">;
