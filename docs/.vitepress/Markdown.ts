import type Token from "markdown-it/lib/token.mjs";
import type { RenderRule } from "markdown-it/lib/renderer.mjs";
import { TokenMeta } from "markdown-it/lib/rules_inline/state_inline.mjs";
import { Options } from "markdown-it";
import Renderer from "markdown-it/lib/renderer.mjs";
import StateCore from "markdown-it/lib/rules_core/state_core.mjs";

// On Link Open - If Func Return True - Do This
//["link_open", () => true, ]

export type CleanupFunction =
  | [
      string,
      ((token: Token, state?: StateCore, env?: any) => void) | null | never
    ]
  | [string]
  | null;

export type RuleFunc = (
  token: Token,
  state?: StateCore,
  env?: any
) => CleanupFunction;

/**
 * ##### Example
 * ```typescript
 * [
 *  "link_open",
 *  (t: Token) => (t.attrGet("youtube-video") !== null),
 *  (t: Token) => {
 *      t.tag = "YouTube"
 *      return "YouTube"
 *  }
 * ]
 * ```
 */
export type EditRule = [string, (token: Token) => boolean, RuleFunc];

export type EditRules = EditRule[];

const Rules: EditRules = [
  [
    "link_open",
    (t: Token) =>
      t.attrGet("youtube-video") !== null &&
      t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "YouTube";
      e.a = "f";
      t.attrPush(["id", t.attrGet("youtube-video")]);
      console.log(t);
      return [
        "YouTube",
        (token: Token) => {
          token.tag = "YouTube";
        },
      ];
    },
  ],
  [
    "link_open",
    (t: Token) =>
      t.attrGet("preview") != null && t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "LinkPreview";

      return [
        "LinkPreview",
        (token: Token) => {
          token.tag = "LinkPreview";
        },
      ];
    },
  ],
  [
    "link_open",
    (t: Token) =>
      t.attrGet("audio-src") != null && t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "AudioEmbed";
      t.attrPush(["src", t.attrGet("href")]);
      return [
        "AudioEmbed",
        (token: Token) => {
          token.tag = "AudioEmbed";
        },
      ];
    },
  ],
  [
    "link_open",
    (t: Token) =>
      t.attrGet("video-platform") != null &&
      t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      const platform = t.attrGet("video-platform");
      if (platform == "Raw") {
        // Iframe
        t.tag = "iframe";
        t.attrPush(["src", t.attrGet("href")]);
        t.attrSet("href", "");
        t.attrSet("target", "");
        t.attrSet("rel", "");
        t.attrSet("platform", platform);
        return [
          "iframe",
          (token: Token) => {
            token.tag = "iframe";
          },
        ];
      } else if (
        platform == "Rumble" ||
        platform == "Odysee" ||
        platform == "Bitchute"
      ) {
        t.tag = "VEmbed";
        t.attrPush(["src", t.attrGet("href")]);
        t.attrSet("href", "");
        t.attrSet("target", "");
        t.attrSet("rel", "");
        t.attrSet("platform", platform);
        return [
          "VEmbed",
          (token: Token) => {
            token.tag = "VEmbed";
          },
        ];
      }
    },
  ],
  /**
   * Gradient Text
   * [Some Text]{from="#FFFFFF" to="#000000"}
   * Transforms into
   * <Gradient fromCol="#FFFFFF" toCol="#000000">Some Text</Gradient>
   */
  [
    "span_open",
    (t: Token) =>
      t.attrGet("from") != null &&
      t.attrGet("class") !== "header-anchor" &&
      t.attrGet("to") != null,
    (t: Token, s: StateCore, e) => {
      t.tag = "Gradient";
      t.attrPush(["fromCol", t.attrGet("from")]);
      t.attrPush(["toCol", t.attrGet("to")]);

      t.attrSet("weight", t.attrGet("weight") ?? "600");
      t.attrSet("size", t.attrGet("size") ?? "1rem");
      return [
        "Gradient",
        (token: Token) => {
          token.tag = "Gradient";
        },
      ];
    },
  ],
  [
    "span_open",
    (t: Token) =>
      t.attrGet("pdf") != null && t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      console.log(t);
      t.tag = "PDF";
      const title = t.content != "" ? t.content : t.attrGet("title");
      t.attrPush(["src", t.attrGet("pdf")]);
      if (t.attrGet("title")) {
        t.attrSet("title", title);
      } else {
        t.attrPush(["title", title]);
      }
      return [
        "PDF",
        (token: Token) => {
          token.tag = "PDF";
        },
      ];
    },
  ],
];

export default Rules;
