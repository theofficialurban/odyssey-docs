// NO LONGER NEEDED: import { createContentLoader } from 'vitepress'
import { globby } from "globby";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default {
  // The load() function is the core of the data loader.
  // It's an async function that should return the data.
  async load() {
    // Find all markdown files in the specified directory.
    const files = await globby("docs/**/*.md");

    // For each file, read its content and parse the frontmatter.
    const posts = await Promise.all(
      files.map(async (file) => {
        const fullPath = path.resolve(process.cwd(), file);
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContent);

        // Return an object with the frontmatter and the generated URL.
        return {
          ...data,
          // Generate a URL-friendly path from the file path.
          href: file.replace(/^docs/, "").replace(/\.md$/, ".html"),
        };
      })
    );
    //console.log(posts);
    // Sort posts by date in descending order (newest first).
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
};
