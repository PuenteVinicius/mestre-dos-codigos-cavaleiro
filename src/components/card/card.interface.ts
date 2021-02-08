import { Thumbnail } from "@/models/marvel-api";

export default interface Card {
  id?: number;
  name?: string;
  description?: string;
  selected?: boolean;
  thumbnail?: Thumbnail;
}