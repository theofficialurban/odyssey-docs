import type Token from "markdown-it/lib/token.mjs";
import mdSpans from "markdown-it-bracketed-spans";
import StateCore from "markdown-it/lib/rules_core/state_core.mjs";
import MarkdownIt, { Options, PluginSimple } from "markdown-it";
import { RuleBlock } from "markdown-it/lib/parser_block.mjs";
import { MarkdownOptions } from "vitepress";
import { Renderer } from "markdown-it/index.js";
import { ElementTransform } from "@nolebase/markdown-it-element-transform";
import { RenderRule } from "markdown-it/lib/renderer.mjs";

// On Link Open - If Func Return True - Do This
//["link_open", () => true, ]

/**
 * Generates the opening HTML for a container with a specified class and optional header HTML.
 * @param {string} containerClass The CSS class to apply to the container div
 * @returns {string} HTML string
 */
function transformAtomicShareBtn(containerClass: string): string {
  let shareBtnOpenHtml =
    '<div class="' +
    containerClass +
    '"><share-button atomic></share-button></div>';

  return shareBtnOpenHtml;
}
/**
 * Generates the opening HTML for a container with a specified class and optional header HTML.
 * @param {string} containerClass The CSS class to apply to the container div
 * @returns {string} HTML string
 */
function transformShareBtn(containerClass: string): string {
  let shareBtnOpenHtml =
    '<div class="' +
    containerClass +
    '"><share-button position="left"></share-button></div>';

  return shareBtnOpenHtml;
}
const defaultShareOptions = {
  containerClass: "share-btns",
  markerPatternAtomic: /^\[\[atomic\]\]/im,
  markerPattern: /^\[\[share\]\]/im,
  transformAtomicShareBtn,
  transformShareBtn,
};

export const ShareBtnPlugin: PluginSimple = (md: MarkdownIt) => {
  const options = Object.assign({}, defaultShareOptions);
  const btnAtomicRegexp = options.markerPatternAtomic;
  const btnRegexp = options.markerPattern;
  const shareBtnAtomic: RuleBlock = (state, startLine, endLine, silent) => {
    let token: Token;
    let match;
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];

    // Reject if the token does not start with [
    if (state.src.charCodeAt(start) !== 0x5b /* [ */) {
      return false;
    }
    // Detect [[atomic]] markup
    match = btnAtomicRegexp.exec(state.src.substring(start, max));
    match = !match ? [] : match.filter((m) => m);
    if (match.length < 1) {
      return false;
    }
    if (silent) {
      return true;
    }

    state.line = startLine + 1;

    // Build Content
    token = state.push("share_button_atomic", "share-button", 0);
    token.markup = "[[atomic]]";
    token.map = [startLine, state.line];
    token.children = [];
    return true;
  };
  const shareBtn: RuleBlock = (state, startLine, endLine, silent) => {
    let token: Token;
    let match;
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];

    // Reject if the token does not start with [
    if (state.src.charCodeAt(start) !== 0x5b /* [ */) {
      return false;
    }
    // Detect [[share]] markup
    match = btnRegexp.exec(state.src.substring(start, max));
    match = !match ? [] : match.filter((m) => m);
    if (match.length < 1) {
      return false;
    }
    if (silent) {
      return true;
    }

    state.line = startLine + 1;

    // Build Content
    token = state.push("share_button_regular", "share-button", 0);
    token.markup = "[[share]]";
    token.map = [startLine, state.line];
    token.children = [];
    return true;
  };
  md.renderer.rules.share_button_atomic = function () {
    return options.transformAtomicShareBtn(`atomic-${options.containerClass}`);
  };
  md.renderer.rules.share_button_regular = function () {
    return options.transformShareBtn(options.containerClass);
  };
  md.block.ruler.before("heading", "shareBtnAtomic", shareBtnAtomic);
  md.block.ruler.before("heading", "shareBtn", shareBtn);
};

export type CleanupFunction =
  | [
      string,
      ((token: Token, state?: StateCore, env?: any) => void) | null | never,
    ]
  | [string]
  | null;

export type RuleFunc = (
  token: Token,
  state: StateCore,
  env?: any,
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
  removeAttrs: string[] = ["href", "rel", "target"],
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

export function createCardFromEmbed(content: string): string {
  let propMap = new Map<string, string>();
  const ssContent = content.split(/\r?\n/);
  ssContent.forEach((c) => {
    const exp = c.split(`: `);
    if (exp[0] && exp[1]) {
      const [key, val] = exp;
      const fixVal = val.slice(1, -1);
      if (key == "image") {
        propMap.set("img", fixVal);
        return;
      } else if (key == "url") {
        propMap.set("href", fixVal);
        return;
      } else if (key == "favicon" || key == "aspectRatio") {
        return;
      }
      propMap.set(key, fixVal);
    }
  });
  let propsString = "";
  propMap.forEach((v, k) => {
    propsString += `${k}="${v}" `;
  });
  return `<Card ${propsString} />`;
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
  // Imgur Embed
  [
    "link_open",
    (t: Token) =>
      t.attrGet("imgur") != null && t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "Imgur";
      t.attrPush(["src", t.attrGet("href")]);
      removeLinkAttributes(t);
      return [
        "Imgur",
        (token: Token) => {
          token.tag = "Imgur";
        },
      ];
    },
  ],
  // Substack Embed
  [
    "link_open",
    (t: Token) =>
      t.attrGet("substack") != null && t.attrGet("class") !== "header-anchor",
    (t: Token, s: StateCore, e) => {
      t.tag = "SubstackEmbed";
      //t.attrPush(["src", t.attrGet("href")]);
      //removeLinkAttributes(t);
      return [
        "SubstackEmbed",
        (token: Token) => {
          token.tag = "SubstackEmbed";
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
      t.attrPush(["fromCol", t.attrGet("from") ?? "#FFFFFF"]);
      t.attrPush(["toCol", t.attrGet("to") ?? "#FFFFFF"]);

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

      t.attrPush(["src", t.attrGet("href") ?? "#"]);

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

const MarkdownOps: MarkdownOptions = {
  html: true,
  math: true,
  config(md) {
    //md.use(mathjax3);
  },
  preConfig(md) {
    md.use(ShareBtnPlugin);
    //md.use(mathjax3);
    const proxy: RenderRule = (tokens, idx, options, env, self) =>
      self.renderToken(tokens, idx, options);
    const fenceRenderer = md.renderer.rules.fence || proxy;
    md.renderer.rules.fence = function (
      tokens: Token[],
      idx: number,
      options: Options,
      env: any,
      self: Renderer,
    ) {
      const token = tokens[idx];
      if (token.info == "embed") {
        return createCardFromEmbed(token.content);
      }
      return fenceRenderer(tokens, idx, options, env, self);
    };
    md.use(mdSpans);
    md.use(
      ElementTransform,
      (() => {
        let transformNextLinkCloseToken: CleanupFunction = null;
        return {
          transform(token, state, env) {
            if (
              transformNextLinkCloseToken !== null &&
              token.type.includes("close")
            ) {
              // Modify the tag of the token
              const [name, cleanupFn] = transformNextLinkCloseToken;
              if (cleanupFn !== undefined && cleanupFn !== null)
                cleanupFn(token, state, env);

              transformNextLinkCloseToken = null;
            }
            Rules.forEach((r) => {
              const [trigger, ruleTest, ruleFunc] = r;
              if (token.type == trigger) {
                if (ruleTest(token)) {
                  transformNextLinkCloseToken = ruleFunc(token, state, env);
                }
              }
            });
          },
        };
      })(),
    );

    //md.use(InlineLinkPreviewElementTransform);
  },
};

export { MarkdownOps as MarkdownOptions };
export default Rules;
