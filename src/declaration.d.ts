declare module "*.yml" {
  const parsed: unknown;

  export default parsed;
}

type StaticParams<Path extends string> =
  | PageProps<Path>["params"][]
  | Awaited<PageProps<Path>["params"]>[];

interface AnyEvent {
  preventDefault(): void;
  stopPropagation(): void;
}
