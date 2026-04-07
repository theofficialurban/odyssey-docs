import { defineConfig } from "@lando/vitepress-theme-default-plus/config";
import { withSidebar } from "vitepress-sidebar";
import { type UserConfig } from "vitepress";
import Inspect from "vite-plugin-inspect";
import tailwindcss from "@tailwindcss/vite";

import Rules, { MarkdownOptions } from "./Markdown";

import { buildEndGenerateOpenGraphImages } from "@nolebase/vitepress-plugin-og-image";

import SiteConstants, { siteBaseUrl } from "./Constants";
import OGFromFrontmatter from "./OpenGraph";

const {
  Collections,
  Contributors,
  CustomContainers,
  CustomElements,
  PathCategories,
  Sponsors,
  NavigationLinks,
  SocialLinks,
  Head,
} = SiteConstants;

const cfg: UserConfig = {
  title: "Urban Odyssey",
  titleTemplate: ":title | Urban Odyssey Database",
  description: "Notes & Docs for public release.",
  base: "",
  lang: "en-US",
  srcDir: "",
  themeConfig: {
    siteTitle: "Urban Odyssey",
    outline: "deep",
    outlineTitle: "Table of Contents",
    baseURL: siteBaseUrl,
    logo: "/icons/colored/Spellbook_Sunset.png",
    contributors: Contributors,
    collections: Collections,
    search: {
      provider: "local",
    },
    containers: CustomContainers,
    socialLinks: SocialLinks,
    nav: NavigationLinks,
    sponsors: Sponsors,
    math: true,
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          if (tag.includes("mjx-container")) return true;
          if (tag.includes("-")) return true;
          const found = CustomElements.find((v) => v == tag);
          if (found !== undefined) return true;
          if (found === undefined) return false;
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss(), Inspect()],

    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-inline-link-preview/client",
        "@royalfig/share-button",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-inline-link-preview",
        "@royalfig/share-button",
      ],
    },
  },

  head: Head,
  sitemap: {
    hostname: "https://docs.urbanodyssey.xyz",
  },

  transformPageData: OGFromFrontmatter,
  buildEnd(siteConfig) {
    return buildEndGenerateOpenGraphImages({
      baseUrl: "https://docs.urbanodyssey.xyz",
      overrideExistingMetaTags: false,
      category: {
        byPathPrefix: PathCategories,
      },
    })(siteConfig);
  },
  markdown: MarkdownOptions,
};

export default defineConfig(
  withSidebar(cfg, {
    useTitleFromFrontmatter: true,
    useFolderLinkFromIndexFile: true,
    useFolderTitleFromIndexFile: true,
    capitalizeEachWords: true,
    documentRootPath: "/docs",
    hyphenToSpace: true,
    collapsed: true,

    underscoreToSpace: true,
    capitalizeFirst: true,
    excludeFilesByFrontmatterFieldName: "secret",
    sortMenusOrderNumericallyFromTitle: true,
    prefixSeparator: ".",
    removePrefixAfterOrdering: true,
    includeEmptyFolder: false,

    includeDotFiles: false,
  }),
);
