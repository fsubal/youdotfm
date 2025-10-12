import clsx from "clsx";
import { LogoOneline } from "../LogoOneline";
import { Icon } from "../Icon";

export function Footer() {
  return (
    <footer
      data-role="footer"
      className={clsx(
        "flex",
        "justify-center",
        "bg-surface",
        "w-full",
        "max-w-none",
      )}
    >
      <div
        className={clsx("w-full", "max-w-(--breakpoint-screen5)", [
          "py-24",
          "screen2:px-40",
          "px-24",
        ])}
      >
        <div className="inline-flex">
          <LogoOneline />
        </div>
        <div
          className={clsx(
            "my-16",
            "grid",
            ["grid-cols-1", "screen2:grid-cols-2"],
            "gap-24",
            "screen2:gap-40",
          )}
        >
          <SocialLink
            config={[
              {
                name: "pixiv",
                url: "https://www.pixiv.net/user/7126141/series/240402",
              },
              {
                name: "BOOTH",
                url: "https://umbrellahead.booth.pm/item_lists/8bNT3aa3",
              },
              {
                name: "FANBOX",
                url: "https://youdotfm.fanbox.cc/",
              },
              {
                name: "マシュマロ",
                url: "https://marshmallow-qa.com/youdotfm",
              },
            ]}
          />
          <AuthorProfile />
        </div>
        <div className={clsx("flex", "justify-end", "screen2:justify-start")}>
          &copy; Subal Fujiaki
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkConfig {
  name: string;
  url: string;
}

function SocialLink({ config }: { config: SocialLinkConfig[] }) {
  return (
    <div>
      <h3 className={clsx("mb-4", "font-bold")}>公式アカウント</h3>
      <div
        className={clsx(
          "flex",
          "flex-col",
          "divide",
          "divide-dashed",
          "divide-y",
          "divide-text-950/25",
        )}
      >
        {config.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener"
            className={clsx("block", "py-8", "px-4", "active:bg-active")}
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}

const rootStyle = clsx("flex", "flex-col");
const titleStyle = clsx("font-bold", "inline-flex", "items-center");
const dataStyle = clsx("flex-1");

function AuthorProfile() {
  return (
    <div>
      <h3 className="font-bold">作者</h3>
      <div className="mb-8">
        藤秋すばる
        <span>（Subal Fujiaki）</span>
      </div>

      <address className={clsx("not-italic", "space-y-16")}>
        <dl className={rootStyle}>
          <dt className={titleStyle}>
            <Icon name="24/Message" unsafeNonGuidelineScale={20 / 24} />
            メール
          </dt>
          <dd className={clsx(dataStyle, "font-mono")}>
            fsubal1102+umbrellahead@gmail.com
          </dd>
        </dl>
        <dl className={rootStyle}>
          <dt className={titleStyle}>
            <span
              aria-label="X"
              role="img"
              className={clsx(
                "text-xl/[1]",
                "inline-flex",
                "justify-center",
                "items-center",
                "w-20",
                "h-20",
              )}
            >
              𝕏
            </span>
            (Twitter) アカウント
          </dt>
          <dd className={dataStyle}>
            <a
              href="https://x.com/f_subal"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              @f_subal
            </a>
          </dd>
        </dl>
        <dl className={rootStyle}>
          <dt className={titleStyle}>circle.ms</dt>
          <dd className={dataStyle}>
            <a
              href="https://webcatalog-free.circle.ms/Circle/21008852"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Umbrellahead
            </a>
          </dd>
        </dl>
      </address>
    </div>
  );
}
