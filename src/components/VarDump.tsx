import clsx from "clsx";

const preStyle = clsx(
  "overflow-auto",
  "rounded-lg",
  "bg-text-50",
  "p-16",
  "text-sm",
);

/**
 * PHPの`var_dump()`みたいなやつ。
 * `var_dump()`と違ってコンポーネントとしてのみ使う
 * （イベントハンドラのデバッグとかは普通に`console.log`や`console.trace`をしてください）
 */
export function VarDump({ children }: { children: unknown }) {
  return <pre className={preStyle}>{JSON.stringify(children, null, 2)}</pre>;
}
