import { ImageSource } from "../ImageSource/model";

export interface Character {
  slug: string;
  thumbnail: ImageSource;
  portrait: ImageSource;
  fullName: {
    japanese: string;
    roman: string;
  };
  profile: string;
}
