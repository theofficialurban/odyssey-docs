import { defineConfig } from "@lando/vitepress-theme-default-plus/config";
import { withSidebar } from "vitepress-sidebar";
import { type UserConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

const siteBaseUrl = "https://docs.urbanodyssey.xyz";

const collections = {
  bible: {
    frontmatter: {
      collection: "bible",
      contributors: false,
      backLink: {
        text: "<- Back to blog",
        link: "/blog",
      },
      aside: false,
      sidebar: false,
      prev: false,
      next: false,
      editLink: false,
    },
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/></svg>',
    iconLink: "/blog",
    patterns: ["bible/*.md"],
  },
};
const cfg: UserConfig = {
  title: "Urban Odyssey",
  titleTemplate: ":title | Urban Odyssey Database",
  description:
    "Urban Odyssey Notes & Documents - Information for public release, additional notes and more",
  base: "",
  lang: "en-US",

  themeConfig: {
    siteTitle: "Urban Odyssey",
    outline: "deep",
    outlineTitle: "Table of Contents",
    baseURL: siteBaseUrl,
    logo: "/icons/colored/Spellbook_Sunset.png",
    collections,
  },

  vite: {
    plugins: [tailwindcss()],
    // optimizeDeps: {
    //   exclude: [
    //     "vitepress-sidebar",
    //     "gray-matter",
    //     "globby",
    //     "tailwindcss", // Exclude Tailwind to fix BigInt and .node file errors
    //   ],
    // },
  },

  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-109HDR35M3",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-109HDR35M3');`,
    ],
    [
      "script",
      { async: "true", src: "https://platform.twitter.com/widgets.js" },
    ],
    ["script", { async: "true", src: "https://substack.com/embedjs/embed.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" }],

    ["link", { rel: "icon", href: "/icons/favicon.ico" }],

    [
      "script",
      {
        crossorigin: "anonymous",
        src: "https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?version=4.8.0&features=es2015%2CIntersectionObserver",
      },
    ],
  ],

  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:title",
        content:
          pageData.frontmatter.layout === "home"
            ? `Urban Odyssey Database`
            : `${pageData.title} | Urban Odyssey Database`,
      },
    ]);

    pageData.frontmatter.head.push([
      "meta",
      {
        name: "twitter:title",
        content:
          pageData.frontmatter.layout === "home"
            ? `Urban Odyssey Database`
            : `${pageData.title} | Urban Odyssey Database`,
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:description",
        content:
          pageData.description ??
          "Urban's Document / Notes Database, notes available for public release by Urban Odyssey",
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "twitter:description",
        content:
          pageData.description ??
          "Urban's Document / Notes Database, notes available for public release by Urban Odyssey",
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:image",
        content:
          pageData.frontmatter.ogimage ?? "https://i.imgur.com/S8LHDQ7.jpeg",
      },
    ]);
    const baseUrl = `${siteBaseUrl}/${pageData.relativePath}`;
    const pgUrl = baseUrl.replace(".md", ".html");
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:url",
        content: pageData.frontmatter.ogurl ?? pgUrl,
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "twitter:image",
        content:
          pageData.frontmatter.ogimage ?? "https://i.imgur.com/S8LHDQ7.jpeg",
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:image:width",
        content: "1200",
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:image:height",
        content: "630",
      },
    ]);
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:type",
        content: pageData.frontmatter.type ?? "article",
      },
    ]);
  },
};
export default defineConfig(
  withSidebar(cfg, {
    useTitleFromFrontmatter: true,
    capitalizeEachWords: true,
    documentRootPath: "/docs",
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    excludeFilesByFrontmatterFieldName: "secret",
  })
);
