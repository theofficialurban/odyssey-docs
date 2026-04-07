import { PageData, TransformPageContext } from "vitepress";
import { computed, ref } from "vue";
import { siteBaseUrl } from "./Constants";

/**
 * Automatically decides on OG Card Type
 * @param pageData Page Data Object
 * @returns {string} The type of card for twitter (`player` or `summary_large_image` or `summary`)
 */
function twitterCardType(pageData: PageData): string {
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

export const baseOgImages = [
  `${siteBaseUrl}/og/1.jpg`,
  `${siteBaseUrl}/og/2.jpg`,
  `${siteBaseUrl}/og/3.jpg`,
  "https://i.imgur.com/S8LHDQ7.jpeg",
];
export function getRandomOg(): string {
  const imgs = baseOgImages.length;
  const max = imgs - 1;
  const pickRand = Math.floor(Math.random() * max);
  return baseOgImages[pickRand] ?? `${siteBaseUrl}/og/1.jpg`;
}

function OGFromFrontmatter(pageData: PageData, ctx: TransformPageContext<any>) {
  pageData.frontmatter.head ??= [];

  const twitterCard = pageData.frontmatter.ogtype
    ? pageData.frontmatter.ogtype
    : twitterCardType(pageData);
  const pageType: string = pageData.frontmatter.ogtype ?? "article";
  let rawTitle = ref<string>(pageData.frontmatter.title);
  // If there is a ordering integer on the title (i.e `20.Home`) this will be removed for SEO
  if (rawTitle.value.includes(".")) {
    const splitTitle = computed<string>(() => {
      const titleSplit = rawTitle.value.split(".");
      if (titleSplit.length == 2) {
        return titleSplit[1];
      }
      return rawTitle.value;
    });
    rawTitle.value = splitTitle.value;
    pageData.title = rawTitle.value;
    pageData.frontmatter.title = rawTitle.value;
  }
  // Sets the `og:title` and the `twitter:title`
  const finalPageTitle =
    pageData.frontmatter.layout === "home"
      ? `Urban Odyssey Database`
      : `${rawTitle.value} | Urban Odyssey Database`;
  pageData.frontmatter.head.push(
    [
      "meta",
      {
        name: "og:title",
        content: finalPageTitle,
      },
    ],
    [
      "meta",
      {
        name: "twitter:title",
        content: finalPageTitle,
      },
    ],
  );

  // Sets the `og:description` and `twitter:description`
  pageData.frontmatter.head.push(
    [
      "meta",
      {
        name: "og:description",
        content:
          pageData.description ??
          "Urban's Document / Notes Database, notes available for public release by Urban Odyssey",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          pageData.description ??
          "Urban's Document / Notes Database, notes available for public release by Urban Odyssey",
      },
    ],
  );

  pageData.frontmatter.head.push([
    "meta",
    {
      name: "twitter:card",
      content: twitterCard ?? "summary_large_image",
    },
  ]);
  if (pageData.frontmatter.secret == true) {
    // If the page is a secret page, make noindex meta tag
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "robots",
        content: "noindex",
      },
    ]);
  }

  if (
    (twitterCard == "player" || pageType == "audio" || pageType == "video") &&
    pageData.frontmatter.ogplayer &&
    pageData.frontmatter.ogplayer != ""
  ) {
    const ogPHeight =
      String(pageData.frontmatter.ogplayerheight ?? 720) ?? "720";
    const ogPWidth =
      String(pageData.frontmatter.ogplayerwidth ?? 1280) ?? "1280";
    pageData.frontmatter.head.push(
      [
        "meta",
        {
          name: "twitter:player",
          content: pageData.frontmatter.ogplayer ?? "",
        },
      ],
      [
        "meta",
        {
          name: "twitter:player:stream",
          content:
            pageData.frontmatter.ogplayer ??
            pageData.frontmatter.ogplayerstream,
        },
      ],
      [
        "meta",
        {
          name: "twitter:player:width",
          content: ogPWidth,
        },
      ],
      [
        "meta",
        {
          name: "twitter:player:height",
          content: ogPHeight,
        },
      ],
      [
        "meta",
        {
          name: "og:player:width",
          content: ogPWidth,
        },
      ],
      [
        "meta",
        {
          name: "og:player:height",
          content: ogPHeight,
        },
      ],
    );
  }
  // Sets the `og:image` and the `twitter:image` along with height and width

  if (pageData.frontmatter.ogimage) {
    const ogImage = pageData.frontmatter.ogimage ?? getRandomOg();
    const ogIHeight =
      String(pageData.frontmatter.ogimageheight ?? 630) ?? "630";
    const ogIWidth =
      String(pageData.frontmatter.ogimagewidth ?? 1200) ?? "1200";
    pageData.frontmatter.head.push(
      [
        "meta",
        {
          name: "og:image",
          content: ogImage,
        },
      ],
      [
        "meta",
        {
          name: "twitter:image",
          content: ogImage,
        },
      ],
      [
        "meta",
        {
          name: "og:image:width",
          content: ogIWidth,
        },
      ],
      [
        "meta",
        {
          name: "twitter:image:width",
          content: ogIWidth,
        },
      ],
      [
        "meta",
        {
          name: "og:image:height",
          content: ogIHeight,
        },
      ],
      [
        "meta",
        {
          name: "twitter:image:height",
          content: ogIHeight,
        },
      ],
    );
  }

  const baseUrl = `${siteBaseUrl}/${pageData.relativePath}`;
  const pgUrl = baseUrl.replace(".md", ".html");
  pageData.frontmatter.head.push([
    "meta",
    {
      name: "og:url",
      content: pageData.frontmatter.ogurl ?? pgUrl,
    },
  ]);

  // og:(case type):(third variable) = value, if none then use supplied
  const thirdVariables = ["url", "secure_url", "type", "width", "height"];
  switch (pageType) {
    case "video":
      const additionalVideoVars: [string, string][] = [
        ["og:video", pageData.frontmatter.ogplayer ?? ""],
        ["og:video:url", pageData.frontmatter.ogplayer ?? ""],
        ["og:video:secure_url", pageData.frontmatter.ogplayer ?? ""],
        ["og:video:type", "text/html"],
        [
          "og:video:width",
          pageData.frontmatter.ogplayerwidth
            ? String(pageData.frontmatter.ogplayerwidth)
            : "1280",
        ],
        [
          "og:video:height",
          pageData.frontmatter.ogplayerheight
            ? String(pageData.frontmatter.ogplayerheight)
            : "720",
        ],
      ];

      pageData.frontmatter.head.push([
        "meta",
        {
          name: "og:type",
          content: "video.other",
        },
      ]);
      additionalVideoVars.forEach((av) => {
        const [key, val] = av;
        pageData.frontmatter.head.push([
          "meta",
          {
            name: key,
            content: val,
          },
        ]);
      });

      break;
    case "audio":
      const additionalAudioVars: [string, string][] = [
        ["og:audio", pageData.frontmatter.ogplayer ?? ""],
        ["og:audio:url", pageData.frontmatter.ogplayer ?? ""],
        ["og:audio:secure_url", pageData.frontmatter.ogplayer ?? ""],
        ["og:audio:type", "audio/mpeg"],
      ];

      pageData.frontmatter.head.push([
        "meta",
        {
          name: "og:type",
          content: "audio",
        },
      ]);
      additionalAudioVars.forEach((av) => {
        const [key, val] = av;
        pageData.frontmatter.head.push([
          "meta",
          {
            name: key,
            content: val,
          },
        ]);
      });

      break;
    default:
      pageData.frontmatter.head.push([
        "meta",
        {
          name: "og:type",
          content: "article",
        },
      ]);
      break;
  }
}
export default OGFromFrontmatter;
