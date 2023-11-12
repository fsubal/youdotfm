import { notFound } from "next/navigation";
import characters from "../data";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import clsx from "clsx";
import { CharacterChips } from "@/components/CharacterChips";
import { nl2br } from "@/utils/nl2br";
import { Chip } from "@/components/Chip";

export function generateStaticParams() {
  return characters.map(({ slug }) => ({ slug }));
}

export default function CharacterPage({
  params,
}: {
  params: { slug: string };
}) {
  const normalizedSlug = decodeURIComponent(params.slug);

  const character = characters.find(({ slug }) => slug === normalizedSlug);
  if (!character) {
    return notFound();
  }

  return (
    <Layout>
      <nav className={clsx("flex", "items-center", "space-x-2")}>
        <Link href="/characters#main">キャラクター</Link>
        <Icon name="24/Next" unsafeNonGuidelineScale={16 / 24} />
        <span>{character.name}</span>
      </nav>
      <hgroup className="not-prose">
        <div className="my-8">
          <Image
            src={character.portraitUrl}
            alt={`${character.name}の立ち絵`}
            width={300}
            height={300 * 1.41}
          />
        </div>
        <div className={clsx("inline-flex", "items-center")}>
          <h2 className={clsx("font-bold", "text-2xl")}>{character.name}</h2>
          &nbsp;
          <span className="italic">{character.roman}</span>
        </div>
      </hgroup>
      <div className="lead">{character.description}</div>

      <table>
        <tbody>
          <tr>
            <th>誕生日</th>
            <td>{nl2br(character.birthday)}</td>
          </tr>
          <tr>
            <th>仕事</th>
            <td>{nl2br(character.works)}</td>
          </tr>
          <tr>
            <th>好きな音楽</th>
            <td>
              {nl2br(character.favoriteMusic)}
              <div className={clsx("not-prose", "mt-2")}>
                <Chip href={character.spotifyPlaylistUrl} target="_blank">
                  <Icon name="24/Play" />
                  Spotifyのプレイリスト
                </Chip>
                <p className={clsx("text-sm", "text-slate-500", "mt-1")}>
                  ※登場するアーティストおよび楽曲はすべて本作品とは無関係です。
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <th>トークスタイル</th>
            <td>{nl2br(character.talkingStyle)}</td>
          </tr>
        </tbody>
      </table>

      <h2>言動</h2>

      <hr />

      <h2>ほかのキャラクター</h2>
      <div className="not-prose">
        <CharacterChips characters={characters} />
      </div>
    </Layout>
  );
}
