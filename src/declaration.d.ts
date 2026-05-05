declare module "*.yml" {
  const parsed: unknown;

  export default parsed;
}

declare module "temporal-polyfill-lite" {
  export * from "temporal-polyfill-lite/dist/index";
}

type StaticParams<Path extends string> =
  | PageProps<Path>["params"][]
  | Awaited<PageProps<Path>["params"]>[];

interface AnyEvent {
  preventDefault(): void;
  stopPropagation(): void;
}
