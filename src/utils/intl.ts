import z from "zod";

export const JPY = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

export const JPYValue = z.number().min(0).int().brand<"JPY">();
export type JPYValue = z.infer<typeof JPYValue>;

export const JPYRange = z.tuple([JPYValue, JPYValue.optional()]);
export type JPYRange = z.infer<typeof JPYRange>;
