declare module "*.yml" {
  const seeds: unknown;

  export default seeds;
}

type StaticParams<Path extends string> =
  | PageProps<Path>["params"][]
  | Awaited<PageProps<Path>["params"]>[];

interface AnyEvent {
  preventDefault(): void;
  stopPropagation(): void;
}

interface BooleanConstructor {
  /**
   * `filter(Boolean)`をいい感じにするための型定義
   */
  <T>(value?: T): value is NonNullable<T>;
}
