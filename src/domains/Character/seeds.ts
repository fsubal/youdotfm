import "server-only";

import { Character } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const characters: Character[] = seed(Character, yaml);

export function findCharacterBySlug(slug: string): Character | undefined {
  const normalizedSlug = decodeURIComponent(slug);

  return characters.find((character) => character.slug === normalizedSlug);
}

export const eri: Character = findCharacterBySlug("eri_takeuchi")!;
export const shiori: Character = findCharacterBySlug("shiori_chiba")!;

/**
 * キャラクター一覧のようなものは存在しないので、キャラクターページでは主人公をデフォルトで表示する
 */
export const defaultCharacter = eri;
