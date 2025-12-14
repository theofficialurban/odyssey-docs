import { PageData } from "vitepress";

type TwitterCard = "summary" | "summary_large_image" | "player";

export function twitterCardType(pageData: PageData): TwitterCard {
  const hasDescription =
    pageData.description && pageData.description != "" ? true : false;
  const usePlayer: boolean =
    pageData.frontmatter.ogplayer && pageData.frontmatter.ogplayer != ""
      ? true
      : false;
  if (usePlayer) return "player";
  if (!hasDescription) return "summary_large_image";
  return "summary";
}
