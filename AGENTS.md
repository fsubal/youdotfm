# プロジェクトの概要

- このプロジェクトはNext.jsのApp Routerで作られたWebサイトです
- 漫画作品の公式Webサイトであり、基本的には静的なWebページで構成されます
  - 動的なサーバーを要する機能（メールフォームなど）はありません
  - 商品一覧のページもありますが、外部の通販サイトに飛ばすのみです
- 外部APIやデータベースを叩く箇所は基本的にありません
  - マスターデータ（作品の話数、商品、新着情報…）はすべてリポジトリ内のyamlで管理されます

# セットアップ

- Node.jsのバージョンは`.node-version`を参照してください
- パッケージマネージャーは`npm`を使用します
- Next.jsのビルドはTurbopackを使用します
  - マスターデータを`import`するために`yaml-loader`を使用しています（`next.config.ts`を参照）

# ディレクトリ構造

```
- /src
  - /app
  - /components
    - /[NameSpace]
      - /[Component].tsx
  - /domains
    - /[NameSpace]
      - model.ts
      - seeds.ts
      - seeds.yml
  - /utils
```

https://scrapbox.io/fsubal/React_%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90 に準じます。

## Reactに関する設計指針

- Server Componentsで済む箇所はできるだけServer Componentsで済ませるようにしてください
- 共通コンポーネントは`/app`以下に置かず、`/components`以下においてください
  - `/app`以下はルーティングのみを表現します
- 複雑なhooksをファイル分割したい場合は以下のように判断します
  - 特定コンポーネントでしか使わないことが明らかな場合は、当該コンポーネントと同じ階層に`use〇〇.ts`を作成します
  - 明らかに汎用と考えられるものは`/utils/hooks.ts`に作成してください
  - `/hooks`というディレクトリは作らないでください

## ドメインに関する設計指針

- ドメインモデルの型定義は`domains/**/model.ts`に、zodを用いて定義してください
  - slugのような識別子のプロパティには`z.brand()`を用いるようにしてください
- マスターデータは`domains/**/seeds.yml`内にリスト形式で記述してください
  - TypeScriptからはオブジェクトの配列になることが暗に期待されます
- `domains/**/seeds.ts`は、基本的に「サーバーサイドでのみ用いるreadonlyなリポジトリ層」という想定で書いてください
  - `import 'server-only'`で開始してください
  - 「ふつうならSQLのクエリを置く用のファイルとする代わりに配列処理が置かれている場所」とイメージしてください
- いっぽう、クライアントサイドでも用いて良い真の汎用ロジック（すでに取得されたJSONを加工する関数など）は`domains/**/model.ts`において構いません
  - ここからの帰結として、`seeds.ts`は`model.ts`をimportして良いですが、逆（`model.ts`が`seed.ts`をimportすること）は禁止ということになります
- 例をあげて説明すると、`findCharacter(slug)`のようなものは`seeds.ts`に、`getFullName(character)`のようなものは`model.ts`に置くことになります

## 許される依存関係

- `/app`は`/components`、`/domains`、`/utils`の中のすべてのファイルをimportして良いです
  - しかし、`/app`内のファイルが`/app`内の別のファイルをimportするのは一般に禁止です
- `/components`は`/domains`、`/utils`の中のすべてのファイルをimportして良いです
  - `/components`が`/components`内のファイルをimportするのも基本的にはOKです（循環依存に注意）
- `/domains`は`/utils`の中のすべてのファイルをimportして良いです
  - `/domains/**/model.ts`はほかの`model.ts`か、`/utils`以外のものをimportしてはいけません
  - `/domains/**/seeds.ts`はほかの`seeds.ts`か、ほかの`model.ts`か、`/utils`以外のものをimportしてはいけません
- `/utils`は`/utils`以外のものをimportしてはいけません
