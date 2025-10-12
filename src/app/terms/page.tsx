import clsx from "clsx";
import { Layout } from "../../components/Layout";
import { SectionTitle } from "../../components/SectionTitle";
import { ResolvingMetadata } from "next";

export async function generateMetadata(_: unknown, parent: ResolvingMetadata) {
  const { title } = await parent;

  return {
    title: {
      template: title!.template,
      default: "プライバシーポリシー",
    },
  };
}

export default async function TermsPage() {
  return (
    <Layout>
      <SectionTitle>プライバシーポリシー</SectionTitle>
      <div className={clsx("prose", "max-w-none")}>
        <p>
          本サイト（youdot.fm）は、利用者の皆さまのプライバシーを尊重し、個人情報の適切な取り扱いに努めます。
        </p>

        <h2>1. 収集する情報</h2>
        <p>
          本サイトでは、閲覧状況を把握しサイト運営を改善するために、
          <a
            href="https://www.cloudflare.com/ja-jp/"
            target="_blank"
            rel="noopener"
          >
            Cloudflare, Inc.
          </a>
          が提供する「
          <a
            href="https://www.cloudflare.com/ja-jp/web-analytics/"
            target="_blank"
            rel="noopener"
          >
            Cloudflare Web Analytics
          </a>
          」を利用しています。
          <br />
          この解析ツールは Cookie
          を使用せず、匿名化された情報（閲覧したページ、参照元、ブラウザ・端末の種類等）を収集します。
        </p>

        <h2>2. 利用目的</h2>
        <p>
          収集した情報は、サイトの利用状況の分析およびコンテンツ改善のためにのみ利用されます。個人を特定できる情報は取得しておらず、その他の目的で利用することはありません。
        </p>

        <h2>3. 情報の共有・提供</h2>
        <p>
          収集した情報は、Cloudflareによる解析サービスの提供のために利用されます。
          <br />
          法令に基づく場合を除き、第三者へ提供することはありません。
        </p>

        <h2>4. 免責事項</h2>
        <p>
          本サイトからリンクされる外部サイトのプライバシーポリシーや取り扱いについては、当サイトは責任を負いません。利用者ご自身の責任でご確認ください。
        </p>

        <h2>5. 改訂</h2>
        <p>
          本ポリシーの内容は、必要に応じて予告なく変更される場合があります。最新の内容は本ページをご確認ください。
        </p>
      </div>
    </Layout>
  );
}
