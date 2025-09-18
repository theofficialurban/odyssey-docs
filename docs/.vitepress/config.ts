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
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><title>Bible SVG Icon</title><path fill="currentColor" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M5 8V5c0-.805.55-.988 1-1h13v12H5z"/><path fill="currentColor" d="M11 14h2v-4h2V8h-2V6h-2v2H9v2h2z"/></svg>`,
    iconLink: "/bible",
    patterns: ["bible/*.md"],
  },
  mahanism: {
    frontmatter: {
      collection: "mahanism",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><title>Hypnotize SVG Icon</title><g fill="currentColor"><path d="m7.949 7.998l.006-.003l.003.009zm.025-.028v-.03l.018.01zm0 .015l.04-.022l.01.006v.04l-.029.016l-.021-.012zm.049.057v-.014l-.008.01zm-.05-.008h.006l-.006.004z"/><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.965 1.69a6.97 6.97 0 0 1 3.861-.642c.722.767 1.177 1.887 1.177 3.135c0 1.656-.802 3.088-1.965 3.766c1.263.24 2.655-.815 3.406-2.742c.38-.975.537-2.023.492-2.996a7.03 7.03 0 0 1 2.488 3.003c-.303 1.01-1.046 1.966-2.128 2.59c-1.44.832-3.09.85-4.26.173l.008.021l.012-.006l-.01.01c.42 1.218 2.032 1.9 4.08 1.586a7.4 7.4 0 0 0 2.856-1.081a6.96 6.96 0 0 1-1.358 3.662c-1.03.248-2.235.084-3.322-.544c-1.433-.827-2.272-2.236-2.279-3.58l-.012-.003c-.845.972-.63 2.71.666 4.327a7.4 7.4 0 0 0 2.37 1.935a6.97 6.97 0 0 1-3.86.65c-.727-.767-1.186-1.892-1.186-3.146c0-1.658.804-3.091 1.969-3.768l-.002-.007c-1.266-.25-2.666.805-3.42 2.74a7.4 7.4 0 0 0-.49 3.012a7.03 7.03 0 0 1-2.49-3.018C1.87 9.757 2.613 8.8 3.696 8.174c1.438-.83 3.084-.85 4.253-.176l.005-.006C7.538 6.77 5.924 6.085 3.872 6.4c-1.04.16-2.03.55-2.853 1.08a6.96 6.96 0 0 1 1.372-3.667l-.002.003c1.025-.243 2.224-.078 3.306.547c1.43.826 2.269 2.23 2.28 3.573L8 7.941c.837-.974.62-2.706-.673-4.319a7.4 7.4 0 0 0-2.362-1.931Z"/></g></svg>`,
    iconLink: "/mahanism",
    patterns: ["mahanism/*.md"],
  },
  technical: {
    frontmatter: {
      collection: "technical",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><title>Technology SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2"/></svg>`,
    iconLink: "/technical",
    patterns: ["technical/*.md"],
  },
  timelines: {
    frontmatter: {
      collection: "timelines",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><title>View-timeline SVG Icon</title><path fill="currentColor" d="M18.436 20.94H5.562a2.5 2.5 0 0 1-2.5-2.5V5.567a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5V18.44a2.5 2.5 0 0 1-2.5 2.5M5.562 4.067a1.5 1.5 0 0 0-1.5 1.5V18.44a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.567a1.5 1.5 0 0 0-1.5-1.5Z"/><path fill="currentColor" d="M6.544 8.287a.5.5 0 0 1 0-1H12a.5.5 0 0 1 0 1ZM9.271 12.5a.5.5 0 0 1 0-1h5.454a.5.5 0 0 1 0 1ZM12 16.724a.5.5 0 0 1 0-1h5.455a.5.5 0 0 1 0 1Z"/></svg>`,
    iconLink: "/timelines",
    patterns: ["timelines/*.md"],
  },
  shared: {
    frontmatter: {
      collection: "shared",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><title>Share-box SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m0-12L8 7m4-4l4 4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></svg>`,
    iconLink: "/shared",
    patterns: ["shared/*.md"],
  },
  reading: {
    frontmatter: {
      collection: "reading",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><title>Bookmark SVG Icon</title><g fill="none"><path d="M4 4v18l8-8l8 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
    iconLink: "/reading",
    patterns: ["reading/*.md"],
  },
  orion: {
    frontmatter: {
      collection: "orion",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><title>Hypnotize SVG Icon</title><g fill="currentColor"><path d="m7.949 7.998l.006-.003l.003.009zm.025-.028v-.03l.018.01zm0 .015l.04-.022l.01.006v.04l-.029.016l-.021-.012zm.049.057v-.014l-.008.01zm-.05-.008h.006l-.006.004z"/><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.965 1.69a6.97 6.97 0 0 1 3.861-.642c.722.767 1.177 1.887 1.177 3.135c0 1.656-.802 3.088-1.965 3.766c1.263.24 2.655-.815 3.406-2.742c.38-.975.537-2.023.492-2.996a7.03 7.03 0 0 1 2.488 3.003c-.303 1.01-1.046 1.966-2.128 2.59c-1.44.832-3.09.85-4.26.173l.008.021l.012-.006l-.01.01c.42 1.218 2.032 1.9 4.08 1.586a7.4 7.4 0 0 0 2.856-1.081a6.96 6.96 0 0 1-1.358 3.662c-1.03.248-2.235.084-3.322-.544c-1.433-.827-2.272-2.236-2.279-3.58l-.012-.003c-.845.972-.63 2.71.666 4.327a7.4 7.4 0 0 0 2.37 1.935a6.97 6.97 0 0 1-3.86.65c-.727-.767-1.186-1.892-1.186-3.146c0-1.658.804-3.091 1.969-3.768l-.002-.007c-1.266-.25-2.666.805-3.42 2.74a7.4 7.4 0 0 0-.49 3.012a7.03 7.03 0 0 1-2.49-3.018C1.87 9.757 2.613 8.8 3.696 8.174c1.438-.83 3.084-.85 4.253-.176l.005-.006C7.538 6.77 5.924 6.085 3.872 6.4c-1.04.16-2.03.55-2.853 1.08a6.96 6.96 0 0 1 1.372-3.667l-.002.003c1.025-.243 2.224-.078 3.306.547c1.43.826 2.269 2.23 2.28 3.573L8 7.941c.837-.974.62-2.706-.673-4.319a7.4 7.4 0 0 0-2.362-1.931Z"/></g></svg>`,
    iconLink: "/project-orion",
    patterns: ["project-orion/*.md"],
  },
  main: {
    frontmatter: {
      collection: "main",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><title>Home-filled SVG Icon</title><path fill="currentColor" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"/></svg>`,
    iconLink: "/main",
    patterns: ["main/*.md"],
  },
  biodigital: {
    frontmatter: {
      collection: "biodigital",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><title>Biodigital-human SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.387 42.5H5.5V12.113A6.613 6.613 0 0 1 12.113 5.5H24v30.387a6.613 6.613 0 0 1-6.613 6.613m18.5 0H24V24h11.887a6.613 6.613 0 0 1 6.613 6.613v5.274a6.613 6.613 0 0 1-6.613 6.613m0-18.5H24V5.5h11.887a6.613 6.613 0 0 1 6.613 6.613v5.274A6.613 6.613 0 0 1 35.887 24"/></svg>`,
    iconLink: "/biodigital-convergence",
    patterns: ["biodigital-convergence/*.md"],
  },
};

const Sponsors = {
  text: "Urban Odyssey Substack",
  link: "https://theofficialurban.substack.com",
  data: [
    {
      name: "Dsmp",
      id: "dsmp",
      url: "https://dsmp.io/?aff=22",
      logo: "https://i0.wp.com/dsmp.io/wp-content/uploads/2025/05/cropped-dsmp-speed-white.jpg?resize=300%2C86&ssl=1",
      type: "half",
    },
    {
      name: "Terabit",
      id: "terabit",
      url: "https://my.terabit.io/aff.php?aff=30",
      logo: "https://terabit.io/logo.png",
      type: "half",
    },
  ],
};
const contributors = {
  merge: "name",
  include: [
    {
      avatar:
        "https://cdn.bio.link/uploads/profile_pictures/2025-07-04/SwfkVYmIZ1hVEcD7en5yz9e3HoWA5BUm.png",
      name: "Urban",

      email: "theofficialurban@protonmail.com",
      title: "Owner",
      maintainer: true,
      mergeOnly: true,
      mergeWith: "theofficialurban@protonmail.com",
      org: "Urban Odyssey",
      orgLink: "https://theofficialurban.substack.com",
      desc: "A chill dude",
      links: [
        { icon: "github", link: "https://github.com/theofficialurban" },
        { icon: "twitter", link: "https://twitter.com/officialurbanus" },
      ],
      sponsor: "https://theofficialurban.substack.com",
    },
  ],
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
    contributors,
    collections,
    sponsors: Sponsors,

    // feed: {
    //   patterns: ["/**/*.md"],
    //   file: "main.rss",
    //   baseUrl: "https://docs.urbanodyssey.xyz/",
    //   title: "Urban Odyssey",
    // },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
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
    useFolderLinkFromIndexFile: true,
    useFolderTitleFromIndexFile: true,
    capitalizeEachWords: true,
    documentRootPath: "/docs",
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    excludeFilesByFrontmatterFieldName: "secret",
  })
);
