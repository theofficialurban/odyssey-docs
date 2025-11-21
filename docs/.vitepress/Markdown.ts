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

/**
 * Sets the `href` `target` and `rel` attributes to `""` for the token
 *
 * @param {Token} t - The Token to Remove the Attributes From
 * @param {string[]} removeAttrs - Keys of the Attributes to Remove (Defaults to `href`, `rel` and `target`)
 * @returns {void}
 */
export function removeLinkAttributes(
  t: Token,
  removeAttrs: string[] = ["href", "rel", "target"]
) {
  let newAttrs: [string, string][] = [];
  let removeAttributes: Map<string, boolean> = new Map();
  removeAttrs.forEach((m) => removeAttributes.set(m, true));
  t.attrs.forEach(([aKey, aVal]) => {
    if (removeAttributes.has(aKey)) {
      return;
    }
    newAttrs.push([aKey, aVal]);
  });
  t.attrs = newAttrs;
}

const Rules: EditRules = [
  [
    "link_open",
    (t: Token) =>
      t.attrGet("youtube-video") !== null &&
      t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "YouTube";

      t.attrPush(["id", t.attrGet("youtube-video")]);
      removeLinkAttributes(t);
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
      removeLinkAttributes(t);
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

        t.attrSet("platform", platform);
        removeLinkAttributes(t);
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
        t.attrSet("platform", platform);
        removeLinkAttributes(t);
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

      return [
        "Gradient",
        (token: Token) => {
          token.tag = "Gradient";
        },
      ];
    },
  ],
  [
    "link_open",
    (t: Token) =>
      t.attrGet("pdf") != null && t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "PDF";

      t.attrPush(["src", t.attrGet("href")]);

      removeLinkAttributes(t);
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
