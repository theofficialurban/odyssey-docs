import { createContentLoader, defineLoader } from "vitepress";

export interface TagLoaderContent {
  id: string;
  relativePath: string;
  url: string;
  title: string;
  type: string;
  excerpt: string;
  collection: string;
  tags: string[];
  secret?: boolean;
  show?: boolean;
}

declare const data: TagLoaderContent[];

export { data };

export default createContentLoader<TagLoaderContent[]>("**/*.md", {
  includeSrc: false,
  excerpt(file, options) {
    file.excerpt = file.data.description;
  },

  transform(data) {
    const filteredData = data.filter(
      (cd) => cd.frontmatter && cd.frontmatter.tags,
    );

    return filteredData.map((contentData, index) => {
      // console.log(contentData.excerpt);
      return {
        id: contentData.frontmatter.id,
        title: contentData.frontmatter.title,
        relativePath: contentData.frontmatter.relativePath,
        url: contentData.frontmatter.url ?? contentData.url,
        collection: contentData.frontmatter.collection,
        excerpt: contentData.excerpt ?? "N/A",
        type: contentData.frontmatter.type,
        tags: contentData.frontmatter.tags,
        secret: contentData.frontmatter.secret ?? false,
        show: contentData.frontmatter.show ?? true,
      } as TagLoaderContent;
    });
  },
});

// export interface Data {
//   // data type
// }

// declare const data: Data
// export { data }

// export default defineLoader({
//   // type checked loader options
//   watch: ['**/*.md'],

//   async load(): Promise<Data> {
//     // ...
//   }
// })
