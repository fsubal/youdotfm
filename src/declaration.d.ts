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
