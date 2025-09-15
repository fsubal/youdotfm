import z, { type ZodType } from "zod";

export function seed<T extends {}>(schema: ZodType<T>, content: unknown): T[] {
  const { data, error } = z.array(schema).safeParse(content);
  if (error) {
    throw new AggregateError(error.issues, z.prettifyError(error));
  }

  return data;
}
