import { readdirSync, statSync } from "fs";
import { join, basename } from "path";
import { DefaultTheme } from "vitepress";

// Helper function to capitalize the first letter of a string
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export interface NavItem {
  text: string;
  link?: string;
  items?: NavItem[];
}
/**
 * Generates a VitePress navbar configuration by scanning a directory.
 * @param {string} docsPath - The path to the directory to scan (e.g., 'docs').
 * @returns {NavItem[]} - The VitePress navbar configuration array.
 */
// export function generateNav(docsPath: string = "docs"): NavItem[] {
//   const nav: NavItem[] = [];
//   const items = readdirSync(docsPath);

//   for (const item of items) {
//     // We want to ignore the .vitepress directory and the root index.md file
//     if (item === ".vitepress" || item === "index.md") {
//       continue;
//     }

//     const fullPath = join(docsPath, item);
//     const stat = statSync(fullPath);

//     // Only consider directories as top-level navigation items
//     if (stat.isDirectory()) {
//       // Find the main link for the dropdown, usually index.md or the first file
//       const subItems = readdirSync(fullPath).filter((file) =>
//         file.endsWith(".md")
//       );

//       let link = "";
//       if (subItems.length > 0) {
//         // Prefer index.md as the main link for the section
//         const indexFile = subItems.find((file) => file === "index.md");
//         const firstFile = subItems[0];

//         // Construct the link path
//         const fileToLink = indexFile || firstFile;
//         link = `/${item}/${fileToLink}`;
//       }

//       nav.push({
//         text: capitalize(item.replace(/-/g, " ")), // 'api-docs' -> 'Api docs'
//         link: link,
//       });
//     }
//   }

//   return nav;
// }
// Helper function to capitalize the first letter and format the name
const formatName = (str) => {
  // Remove the .md extension
  const nameWithoutExt = str.replace(/\.md$/, "");
  // Replace hyphens with spaces and capitalize the first letter
  const formatted = nameWithoutExt.replace(/-/g, " ");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

/**
 * Generates a VitePress navbar configuration with dropdowns by scanning a directory.
 * @param {string} docsPath - The path to the directory to scan (e.g., 'docs').
 * @returns {DefaultTheme.SidebarItem[]} - The VitePress navbar configuration array.
 */
export function generateNav(docsPath = "docs"): DefaultTheme.SidebarItem[] {
  const nav: DefaultTheme.SidebarItem[] = [];
  const items = readdirSync(docsPath);

  for (const item of items) {
    // Ignore .vitepress directory and the root index.md file
    if (item === ".vitepress" || item === "index.md") {
      continue;
    }

    const fullPath = join(docsPath, item);
    const stat = statSync(fullPath);

    // Only process directories for top-level nav items
    if (stat.isDirectory()) {
      const subItems = readdirSync(fullPath)
        .filter((file) => file.endsWith(".md") && formatName(file) !== "Index")
        .map((file) => {
          return {
            text: formatName(file),
            link: `/${item}/${file.replace(/\.md$/, "")}`,
          };
        });

      // Only add to nav if the directory has markdown files
      if (subItems.length > 0) {
        nav.push({
          text: formatName(item), // 'api-docs' -> 'Api docs'
          items: subItems,
        });
      }
    }
  }

  return nav;
}
export type GenNav = [name: string, dir: string];
export type GenResult = { name: string; results: DefaultTheme.SidebarItem[] };
export function generateNavs(dirs: GenNav[]): GenResult[] {
  let results: GenResult[] = [];

  dirs.forEach(([name, dir]) => {
    const find = generateNav(dir);
    results.push({ name, results: find });
  });
  return results;
}
