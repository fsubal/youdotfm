import "server-only";

import { Character } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const characters = seed(Character, yaml);

export const eri = characters.find(({ slug }) => slug === "eri_takeuchi")!;
export const shiori = characters.find(({ slug }) => slug === "shiori_chiba")!;
