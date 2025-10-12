import { defineConfig } from "@lando/vitepress-theme-default-plus/config";
import { withSidebar } from "vitepress-sidebar";
import { type UserConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";
import container from "markdown-it-container";
import type {
  Contributors,
  CollectionDefinition,
  Contributor,
  DefineCollections,
} from "./utils";
const siteBaseUrl = "https://docs.urbanodyssey.xyz";

const customContainer = {
  footnote: { defaultTitle: "Footnote" },
};

const collections: DefineCollections = {
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
  magic: {
    frontmatter: {
      collection: "magic",
      contributors: false,
      backLink: false,
      aside: true,
      sidebar: true,
      prev: true,
      next: true,
      editLink: false,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 128 128"><title>Magic-wand SVG Icon</title><linearGradient id="notoMagicWand0" x1="50.039" x2="58.797" y1="68.904" y2="68.904" gradientTransform="rotate(45.001 55.992 74.727)scale(1 1.1165)" gradientUnits="userSpaceOnUse"><stop offset=".595" stop-color="#616161"/><stop offset=".775" stop-color="#565656"/><stop offset="1" stop-color="#424242"/></linearGradient><path fill="url(#notoMagicWand0)" d="m10.8 123.89l-6.19-6.2l91.23-91.23l6.19 6.19z"/><linearGradient id="notoMagicWand1" x1="88.88" x2="95.665" y1="34.518" y2="41.304" gradientUnits="userSpaceOnUse"><stop offset=".262" stop-color="#F5F5F5"/><stop offset=".466" stop-color="#EAEAEA"/><stop offset=".822" stop-color="#CDCDCD"/><stop offset=".989" stop-color="#BDBDBD"/></linearGradient><path fill="url(#notoMagicWand1)" d="M100.04 28.46c-2.25-2.25-4.19-2-4.19-2L79.73 42.58c.95-.21 2.62.6 4.11 2.08c1.48 1.48 2.29 3.15 2.08 4.11l16.12-16.12c-.01 0 .25-1.93-2-4.19"/><linearGradient id="notoMagicWand2" x1="13.913" x2="20.715" y1="109.476" y2="116.277" gradientUnits="userSpaceOnUse"><stop offset=".262" stop-color="#F5F5F5"/><stop offset=".466" stop-color="#EAEAEA"/><stop offset=".822" stop-color="#CDCDCD"/><stop offset=".989" stop-color="#BDBDBD"/></linearGradient><path fill="url(#notoMagicWand2)" d="M25.1 103.4c-2.25-2.25-4.19-2-4.19-2L4.74 117.56c.95-.21 2.67.56 4.16 2.04c1.48 1.48 2.25 3.21 2.04 4.16l16.16-16.17s.25-1.94-2-4.19"/><ellipse cx="7.8" cy="120.7" fill="#9E9E9E" rx="1.94" ry="4.38" transform="rotate(-45.001 7.798 120.7)"/><linearGradient id="notoMagicWand3" x1="68.386" x2="102.984" y1="60.107" y2="25.509" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FADA80" stop-opacity="0"/><stop offset="1" stop-color="#FADA80"/></linearGradient><path fill="url(#notoMagicWand3)" d="M95.82 26.48L27.88 94.43c-.76.76.01 2.76 1.72 4.46c1.71 1.71 3.71 2.48 4.46 1.72l67.95-67.95s.42-1.88-1.98-4.21s-4.21-1.97-4.21-1.97" opacity=".85"/><linearGradient id="notoMagicWand4" x1="-2.51" x2="21.434" y1="131.003" y2="107.059" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1A237E"/><stop offset=".186" stop-color="#1D2A87" stop-opacity=".814"/><stop offset=".49" stop-color="#243DA0" stop-opacity=".51"/><stop offset=".873" stop-color="#2F5CC7" stop-opacity=".127"/><stop offset="1" stop-color="#3367D6" stop-opacity="0"/></linearGradient><path fill="url(#notoMagicWand4)" d="M72.59 49.71L4.65 117.66c-.76.76.01 2.76 1.72 4.46c1.71 1.71 3.71 2.48 4.46 1.72L78.79 55.9s.42-1.88-1.98-4.21c-2.41-2.32-4.22-1.98-4.22-1.98" opacity=".22"/><radialGradient id="notoMagicWand5" cx="75.918" cy="23.046" r="14.784" gradientTransform="rotate(2.144 75.14 23.029)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFEB3B"/><stop offset="1" stop-color="#FBC02D"/></radialGradient><path fill="url(#notoMagicWand5)" d="m68.37 18.82l5.98-5.96c.33-.33.9-.06.85.41l-.77 6.99c-.03.27.16.52.44.55l8.56 1.02c.5.06.61.74.14.95l-8.92 3.99c-.13.06-.23.18-.27.32l-2.58 8.85c-.12.43-.7.49-.91.1l-3.99-7.25a.51.51 0 0 0-.48-.26l-7.66.62a.497.497 0 0 1-.39-.85l5.08-4.95c.15-.14.19-.37.11-.56l-2.69-6.15c-.18-.42.25-.85.67-.65l6.29 2.94c.17.08.39.04.54-.11"/><radialGradient id="notoMagicWand6" cx="99.385" cy="64.955" r="11.883" gradientTransform="rotate(-20.089 97.619 67.899)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFEB3B"/><stop offset="1" stop-color="#FBC02D"/></radialGradient><path fill="url(#notoMagicWand6)" d="m90.09 63.26l4.74 2.19c.12.06.26.04.36-.04l4.75-3.59c.25-.19.59.01.57.31l-.45 5.9c-.01.13.05.26.17.33l4.53 2.8c.27.17.2.59-.12.65l-5.68 1.17c-.14.03-.25.13-.28.27l-1.21 5.35c-.07.32-.5.38-.66.09l-2.52-4.61a.358.358 0 0 0-.32-.19l-5.96.19c-.31.01-.48-.35-.29-.59l3.84-4.59c.09-.1.11-.24.06-.37l-2.02-4.82c-.11-.29.2-.59.49-.45"/><radialGradient id="notoMagicWand7" cx="134.587" cy="-6.354" r="16.452" gradientTransform="matrix(-.2474 .9423 -1.0398 -.1868 134.717 -108.97)" gradientUnits="userSpaceOnUse"><stop offset=".325" stop-color="#FFEB3B"/><stop offset="1" stop-color="#FBC02D"/></radialGradient><path fill="url(#notoMagicWand7)" d="m109.65 11.65l8.43-3.74c.42-.19.79.23.57.63l-4.17 7.68c-.1.18-.08.4.05.54l9.03 8.76c.27.28.04.78-.37.8l-11.08-1.95c-.17.01-.33.11-.42.27l-5.83 10.67c-.22.39-.78.35-.87-.06l-1.14-10.39a.438.438 0 0 0-.39-.33l-9.15-1.49c-.39-.03-.54-.5-.24-.79l7.65-5.88c.11-.11.17-.26.15-.41L100.5 4.38c-.04-.44.51-.73.82-.43l7.82 7.62c.13.12.33.15.51.08"/><path fill="#FDD835" d="M96.29 26.87c-3.74.96-7.53 1.79-11.4 2.11c-3.87.35-7.8.07-11.62-.62c-3.82-.71-7.57-1.6-11.35-2.3c-3.78-.7-7.58-1.26-11.4-1.7c-1.91-.22-3.83-.38-5.74-.57c-1.87-.18-3.72-.13-5.48.28c-1.73.44-3.34 1.27-4.38 2.63c-1.05 1.34-1.55 3.08-1.55 4.87c-.02 3.61 1.43 7.21 3.27 10.46c1.85 3.27 4.28 6.24 6.71 9.21c4.84 5.96 10.07 11.63 15.26 17.34c2.6 2.86 5.2 5.71 7.76 8.61c2.58 2.88 5.07 5.85 7.45 8.91c2.39 3.05 4.66 6.24 6.51 9.7c.46.84.97 1.77 1.12 2.89c.05.57-.01 1.2-.33 1.76s-.85.91-1.36 1.14c-1.05.42-2.09.45-3.09.4c-1-.06-1.98-.22-2.94-.44c-3.82-.93-7.39-2.52-10.83-4.31c-1.72-.9-3.4-1.86-5.05-2.87c-1.64-1.02-3.25-2.1-4.83-3.2c3.28 2.04 6.64 3.94 10.11 5.59c3.47 1.64 7.08 3.07 10.79 3.82c.93.17 1.86.31 2.78.34c.92.03 1.85-.05 2.59-.37c.36-.17.66-.39.81-.69c.15-.29.19-.66.15-1.05c-.12-.8-.55-1.6-1.04-2.43c-1.87-3.3-4.16-6.38-6.6-9.34c-9.76-11.84-20.88-22.6-30.8-34.54c-2.43-3.01-4.89-6.07-6.82-9.54c-1.9-3.44-3.47-7.26-3.42-11.43c.02-2.06.62-4.23 1.98-5.93c1.35-1.73 3.37-2.73 5.36-3.21c2.01-.44 4.07-.49 6.04-.26c1.92.24 3.85.44 5.77.71c3.84.54 7.66 1.2 11.45 1.99c3.79.8 7.54 1.76 11.29 2.57c3.74.82 7.56 1.25 11.4 1.05c3.83-.18 7.64-.83 11.43-1.58"/><radialGradient id="notoMagicWand8" cx="92.761" cy="70.093" r="93.729" gradientTransform="matrix(.8599 .5105 -.306 .5153 34.446 -13.385)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFEE58" stop-opacity="0"/><stop offset="1" stop-color="#FDD835"/></radialGradient><path fill="url(#notoMagicWand8)" d="M67.78 35.64c-11.25 2.62-24.16-5-36.08-3.66c-4.55.6-6.42 6.04-2.05 14.66c8.58 14.77 21.1 23.49 25.72 28.9c-6.21-3.48-18.97-12.65-27.84-21.28c-13.35-12.8-10.88-28.8 1.5-28.75c4.15-.4 12.18 1.6 15.54 2.83c3.31 1.33 14.58 6.24 23.21 7.3"/></svg>`,
    iconLink: "/magic",
    patterns: ["magic/*.md"],
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
const contributors: Contributors = {
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
const socialLinks = [
  { icon: "twitter", link: "https://x.com/officialurbanus" },
  { icon: "facebook", link: "https://facebook.com/theurbanodyssey" },
  { icon: "instagram", link: "https://instagram.com/theofficialurban" },
  { icon: "youtube", link: "https://youtube.com/@MastersMahanPodcast" },
  {
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18v18H3zm7.564 2.536h-4.31v12.928h4.31V15.59H12v1.436h1.436v1.436h4.31v-4.309h-1.437v-1.436h-1.436v-1.436h1.436V9.845h1.436V5.536h-4.309v1.436H12V8.41h-1.436z"/></svg>',
    },
    link: "https://kick.com/officialurban",
  },
  {
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1zm18.39 12.478L17.5 16.76H12l-2.922 2.791v-2.79h-4.64V2.97h16.499zM17.5 6.747v5.74h-2.063v-5.74zm-5.5 0v5.74H9.938v-5.74z" clip-rule="evenodd"/></svg>',
    },
    link: "https://twitch.tv/theurbanodyssey",
  },
  {
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.453 13.546a1.88 1.88 0 0 0 .275-2.645a2 2 0 0 0-.275-.275A21.2 21.2 0 0 0 10.14 7.85c-1.066-.51-2.256.2-2.426 1.414a23.5 23.5 0 0 0-.14 5.502c.116 1.23 1.292 1.964 2.372 1.492a19.6 19.6 0 0 0 4.506-2.704zm6.932-5.4a5.85 5.85 0 0 1 .014 7.872a26.15 26.15 0 0 1-13.104 7.828a5.116 5.116 0 0 1-6.167-3.578c-1.524-5.2-1.3-11.08.17-16.305C3.07 1.22 5.651-.503 8.308.131c4.925 1.174 9.545 4.196 13.077 8.013z"/></svg>',
    },
    link: "https://rumble.com/c/MastersMahanPodcast",
  },
];

const navLinks = [
  {
    text: "All Posts",
    link: "/all/",
  },
  {
    text: "Playlists",
    link: "/main/playlists.html",
  },
  {
    text: "Urban's Channels",
    items: [
      {
        text: "Substack",
        columns: 2,
        items: [
          {
            text: "Urban Odyssey",
            link: "https://theofficialurban.substack.com",
            alert: { text: "Primary", type: "success" },
          },
          {
            text: "Urban's Library",
            link: "https://urbanslibrary.substack.com",
            alert: { text: "Secondary", type: "danger" },
          },
        ],
      },
      {
        text: "Live Streams",
        columns: 3,
        items: [
          {
            text: "Rumble",
            link: "https://rumble.com/c/MastersMahan/live",
          },
          {
            text: "Twitch.tv",
            link: "https://twitch.tv/theurbanodyssey",
          },
          {
            text: "Kick",
            link: "https://kick.com/officialurban",
          },
        ],
      },
      {
        text: "Video Content",
        columns: 4,
        items: [
          { text: "YouTube", link: "https://youtube.com/@MastersMahanPodcast" },
          {
            text: "Rumble",
            link: "https://rumble.com/c/MastersMahan",
          },
          {
            text: "Bitchute",
            link: "https://bitchute.com/channel/mastersmahan",
          },
          {
            text: "Odysee",
            link: "https://odysee.com/@UrbanOdyssey:b",
          },
        ],
      },
    ],
  },

  {
    text: "Donations",
    items: [
      { text: "CashApp", link: "https://cash.app/jsorb84" },
      { text: "Venmo", link: "https://venmo.com/officialurban" },
      {
        text: "PayPal",
        link: "https://paypal.me/officialurban?country.x=US&locale.x=en_US",
      },
    ],
  },
];

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
    search: {
      provider: "local",
    },
    containers: customContainer,
    socialLinks,
    nav: navLinks,
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
    collapsed: false,
    includeFolderIndexFile: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    excludeFilesByFrontmatterFieldName: "secret",
  })
);
