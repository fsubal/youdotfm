import z from "zod";

/**
 * NOTE:
 * 本プロジェクトでは `Date` から `Temporal` へ変換する用途がなく、
 * 文字列 or Temporal 型を直接扱うため現状 Date.prototype の拡張をしていません。
 *
 * `temporal-polyfill-lite` では `install(false)` を呼ぶことで
 * `Date.prototype.toTemporalInstant` を含む拡張を有効化できます。
 *
 * 将来もし `Date` -> `Temporal.Instant` 変換が必要になった場合は、
 * 用途に応じて `install(false)` の採用を検討するか、
 * `Temporal.Instant.fromEpochMilliseconds(date.getTime())` のような
 * 明示的変換を利用してください。
 */
import { Temporal } from "temporal-polyfill-lite";


const TIMEZONE = "Asia/Tokyo";

/**
 * RFC 9557に準拠した日本時間の日時文字列
 * 例: `2024-06-01 12:00:00`
 */
export const JapanDateTime = z.codec(
  z.string(),
  z.instanceof(Temporal.ZonedDateTime),
  {
    decode: (str) => Temporal.PlainDateTime.from(str).toZonedDateTime(TIMEZONE),
    encode: (datetime) => datetime.toString(),
  },
);

export type JapanDateTime = z.infer<typeof JapanDateTime>;

export function formatDateTime(datetime: Temporal.ZonedDateTime) {
  return datetime.toLocaleString("ja-jp", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

/**
 * RFC 9557に準拠した日付文字列
 * 例: `2024-06-01`
 */
export const PlainDate = z.codec(z.string(), z.instanceof(Temporal.PlainDate), {
  decode: (str) => Temporal.PlainDate.from(str),
  encode: (date) => date.toString(),
});

export function formatDate(date: Temporal.PlainDate) {
  return date.toLocaleString("ja-jp", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * ◯年◯月を表す値（例: `2024-06`）
 * ある1ヶ月の期間を表すのに使える
 */
export const YearMonth = z.codec(
  z.string(),
  z.instanceof(Temporal.PlainYearMonth),
  {
    decode: (str) => Temporal.PlainYearMonth.from(str),
    encode: (yearMonth) => yearMonth.toString(),
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
    encode: (monthDay) => monthDay.toString(),
  },
);

export type MonthDay = z.infer<typeof MonthDay>;
