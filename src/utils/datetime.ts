import z from "zod";
import { Temporal, toTemporalInstant } from "@js-temporal/polyfill";

// @ts-expect-error https://github.com/js-temporal/temporal-polyfill
Date.prototype.toTemporalInstant = toTemporalInstant;

const TIMEZONE = "Asia/Tokyo";

/**
 * RFC 9557に準拠した日本時間の日時文字列
 * 例: `2024-06-01 12:00:00`
 */
export const JapanDateTime = z.codec(
  z.string(),
  z.instanceof(Temporal.ZonedDateTime),
  {
    decode: (isoString) =>
      Temporal.PlainDateTime.from(isoString).toZonedDateTime(TIMEZONE),
    encode: (date) => date.toString(),
  },
);

export type JapanDateTime = z.infer<typeof JapanDateTime>;

/**
 * ◯年◯月を表す値（例: `2024-06`）
 * ある1ヶ月の期間を表すのに使える
 */
export const YearMonth = z.codec(
  z.string(),
  z.instanceof(Temporal.PlainYearMonth),
  {
    decode: (str) => Temporal.PlainYearMonth.from(str),
    encode: (ym) => ym.toString(),
  },
);

export type YearMonth = z.infer<typeof YearMonth>;

/**
 * 特定の年に紐づかない月日（例: `06-01`）
 * 人の誕生日や記念日などを表すのに使える
 */
export const MonthDay = z.codec(
  z.string(),
  z.instanceof(Temporal.PlainMonthDay),
  {
    decode: (str) => Temporal.PlainMonthDay.from(str),
    encode: (md) => md.toString(),
  },
);

export type MonthDay = z.infer<typeof MonthDay>;
