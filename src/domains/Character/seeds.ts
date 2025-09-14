import "server-only";

import { Character } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const characters: Character[] = seed(Character, yaml);

export const eri: Character = characters.find(
  ({ slug }) => slug === "eri_takeuchi",
)!;

export const shiori: Character = characters.find(
  ({ slug }) => slug === "shiori_chiba",
)!;
