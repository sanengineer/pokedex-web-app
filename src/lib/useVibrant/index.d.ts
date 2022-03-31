import { Palette } from "node-vibrant/lib/color";
import { ImageSource } from "node-vibrant/lib/typing";
export default function useVibrant(url: ImageSource | null): {
  colors: Palette;
  done: boolean;
};
