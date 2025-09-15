declare module "*/seeds.yml" {
  const seeds: unknown;

  export default seeds;
}

type StaticParams<Path extends string> = Awaited<PageProps<Path>["params"]>[];
