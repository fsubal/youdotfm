import clsx from "clsx";
import {
  BlueskyIntentUrl,
  SocialUrl,
  XIntentUrl,
} from "../../utils/url/social";
import { XLogo } from "./XLogo";

export function ShareButton({
  intentUrl,
  children,
  className,
}: {
  intentUrl: SocialUrl;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={intentUrl.toString()}
      target="_blank"
      rel="noopener"
      className={clsx(
        "rounded-full",
        "px-24",
        "py-8",
        "inline-flex",
        "text-sm",
        "font-bold",
        className,
      )}
    >
      {children}
    </a>
  );
}

interface Props {
  url: string | URL;
  text: string;
}

export function XShareButton({ url, text }: Props) {
  return (
    <ShareButton
      intentUrl={new XIntentUrl(url, text)}
      className={clsx("bg-black", "text-white")}
    >
      <XLogo size="lg" />
      (Twitter) でシェア
    </ShareButton>
  );
}

export function BlueskyShareButton({ url, text }: Props) {
  return (
    <ShareButton
      intentUrl={new BlueskyIntentUrl(url, text)}
      className={clsx("bg-[#0B86FE]", "text-white")}
    >
      Blueskyでシェア
    </ShareButton>
  );
}

export function ShareLinkContainer({ url, text }: Props) {
  return (
    <div className={clsx("flex", "flex-wrap", "gap-8")}>
      <XShareButton url={url} text={text} />
      <BlueskyShareButton url={url} text={text} />
    </div>
  );
}
