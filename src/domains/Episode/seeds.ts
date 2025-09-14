import "server-only";

import { Episode } from "./model";
import { seed } from "../../utils/seed";
import yaml from "./seeds.yml";

export const episodes: Episode[] = seed(Episode, yaml);
