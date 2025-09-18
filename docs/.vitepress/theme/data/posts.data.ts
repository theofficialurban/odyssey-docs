// NO LONGER NEEDED: import { createContentLoader } from 'vitepress'
import { globby } from "globby";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { useRouter, type HeadConfig } from "vitepress";
import type { BannerFontProps, BannerProps } from "..";
import createContentLoader from "@lando/vitepress-theme-default-plus/ccl";

export interface Frontmatter {
  title?: string;
  titleTemplate?: string | boolean;
  description?: string;
  head?: HeadConfig[];
  layout?: "doc" | "home" | "page" | "false";
  navbar?: boolean;
  sidebar?: boolean;
  aside?: boolean | "left";
  outline?: number | [number, number] | "deep" | false;
  lastUpdated?: boolean | Date;
  editLink?: boolean;
  footer?: boolean;
  pageClass?: string;
  isHome?: boolean;
  ogimage?: string;
  banner?: boolean;
  bannerSettings?: { font?: BannerFontProps; settings?: BannerProps };
  useHeaderFont?: string;
  useBodyFont?: string;
  useBgColor?: string;
  href?: string;
}
export default createContentLoader("./**/*.md", {
  siteConfig: globalThis.VITEPRESS_CONFIG,
});
// export default {
//   // The load() function is the core of the data loader.
//   // It's an async function that should return the data.
//   async load() {
//     // Find all markdown files in the specified directory.
//     const files = await globby("docs/**/*.md");

//     // For each file, read its content and parse the frontmatter.
//     const posts: Frontmatter[] = await Promise.all(
//       files.map(async (file) => {
//         const fullPath = path.resolve(process.cwd(), file);
//         const fileContent = fs.readFileSync(fullPath, "utf-8");
//         const { data } = matter(fileContent);

//         // Return an object with the frontmatter and the generated URL.
//         return {
//           ...data,
//           // Generate a URL-friendly path from the file path.
//           href: file.replace(/^docs/, "").replace(/\.md$/, ".html"),
//         } as Frontmatter;
//       })
//     );
//     //console.log(posts);
//     // Sort posts by date in descending order (newest first).
//     return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
//   },
// };
