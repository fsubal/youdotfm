const ONE_LINE = /\r?\n/g;
const TWO_LINES = /\r?\n\r?\n+/;

/**
 * 改行を`<br>`に変換する。PHPのアレ
 *
 * @see https://www.php.net/manual/ja/function.nl2br.php
 */
export function nl2br(source: string) {
  return source
    .split(ONE_LINE)
    .flatMap((line, index) => [line, <br key={line + index} />]);
}

/**
 * 1行目を返す
 */
export function firstLine(source: string) {
  return source.split(ONE_LINE)[0];
}

/**
 * 改行を`<br>`に変換しつつ、改行が2連続したら`<p>`で包む。Railsのアレ
 *
 * @see https://railsdoc.com/page/simple_format
 */
export function simpleFormat(source: string) {
  return source.split(TWO_LINES).map((paragraphs, i) => {
    const lines = paragraphs.split(ONE_LINE);

    return (
      <p key={i}>
        {lines.flatMap((line, j) => {
          const isLast = j === lines.length - 1;

          return isLast ? line : [line, <br key={`${j}-${i}`} />];
        })}
      </p>
    );
  });
}
