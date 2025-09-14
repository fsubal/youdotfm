import z, { type ZodType } from "zod";

export function seed<T extends {}>(schema: ZodType<T>, content: unknown): T[] {
  return z.array(schema).parse(content);
}
