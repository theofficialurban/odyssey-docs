import MarkdownIt, { PluginSimple } from "markdown-it";
import { Token } from "markdown-it/index.js";
import { RuleBlock } from "markdown-it/lib/parser_block.mjs";

/**
 * Generates the opening HTML for a container with a specified class and optional header HTML.
 * @param {string} containerClass The CSS class to apply to the container div
 * @returns {string} HTML string
 */
export type DoubleBracketTransformFunction = (containerClass: string) => string;

/**
 * Default options for transform rules
 * @prop containerClass Classes that will be applied to the respective container
 * @prop markerPattern A regexp check mapped to the specific marker key
 * @prop transformHtmlFunction Transforms the HTML into string
 * @prop markTokenState MarkdownIt State Type and Tag
 */
export type DoubleBracketDefaultOptions = {
  containerClass: string;
  markerPattern: RegExp;
  rawMarkerMarkup: string; // [[something]]
  transformHtmlFunction: DoubleBracketTransformFunction;
  markTokenState: {
    tokenType: string;
    tokenTag: string;
  };
};
export type GetMarkdownPluginByKey = (markKey: string) => PluginSimple | null;

/**
 * Generates MarkdownIt Rules and PluginFunctions to replace double bracket strings with HTML
 *
 * @export
 * @class DoubleBracketMarkdownTransform
 */
export default class DoubleBracketMarkdownTransform {
  private _TransformMaps: Map<string, DoubleBracketDefaultOptions> = new Map<
    string,
    DoubleBracketDefaultOptions
  >();
  /**
   * Creates a Options object which is used for the class constructor
   * @static
   * @param searchBracketString The string to search for in `[[???]]` form where `???` is the value of this string
   * @param tokenState An object with `tokenType` and `tokenTag` values
   * @param transformHtmlFunction A function that takes a classString and returns a string version of the HTML to replace the doublebracket with `[[???]]` -> the result of this function
   * @param containerClass A class for the container which will be passed to the `transformHtmlFunction`
   * @returns Options object for creating instances of the class.
   */
  static createOptions(
    searchBracketString: string,
    tokenState: { tokenType: string; tokenTag: string },
    transformHtmlFunction: DoubleBracketTransformFunction,
    containerClass: string = "",
  ): DoubleBracketDefaultOptions {
    const rawMarkerMarkup = `[[${searchBracketString}]]`;

    const markerPattern = this.createRegexCheck(searchBracketString);
    return {
      containerClass,
      markerPattern,
      rawMarkerMarkup,
      transformHtmlFunction,
      markTokenState: tokenState,
    };
  }
  /**
   * Create a RegEx to check for a double bracket with content
   * @static
   * @param doubleBracketContent The content of the double bracket to check for `testing` will check for `[[testing]]`
   * @returns Regular Expression to check for `doubleBracketContent`
   */
  static createRegexCheck(doubleBracketContent: string): RegExp {
    const formattedString = `^\[\[${doubleBracketContent}\]\]/im`;
    return new RegExp(formattedString);
  }
  /**
   *
   * @param markTransforms Pair a set of replacement mark options with a key to transform as many `[[???]]` as you'd like based on the options
   */
  constructor(
    ...markTransforms: [
      markerRuleKey: string,
      markerOpts: DoubleBracketDefaultOptions,
    ][]
  ) {
    markTransforms.forEach((t) => {
      const [markKey, markOpts] = t;
      this._TransformMaps.set(markKey, markOpts);
    });
  }
  private getMarkdownPlugin: GetMarkdownPluginByKey = (markKey) => {
    const foundOptions = this._TransformMaps.get(markKey) ?? null;
    if (!foundOptions) return null;
    const pluginReturn: PluginSimple = (md: MarkdownIt) => {
      const options: DoubleBracketDefaultOptions = Object.assign(
        {},
        foundOptions,
      );
      const markerRegexp = options.markerPattern;
      const markerRuleBlock: RuleBlock = (
        state,
        startLine,
        endLine,
        silent,
      ) => {
        let token: Token;
        let match;
        const start = state.bMarks[startLine] + state.tShift[startLine];
        const max = state.eMarks[startLine];

        // Reject if the token does not start with [
        if (state.src.charCodeAt(start) !== 0x5b /* [ */) {
          return false;
        }
        // Detect [[atomic]] markup
        match = markerRegexp.exec(state.src.substring(start, max));
        match = !match ? [] : match.filter((m) => m);
        if (match.length < 1) {
          return false;
        }
        if (silent) {
          return true;
        }

        state.line = startLine + 1;

        // Build Content
        token = state.push(
          options.markTokenState.tokenType,
          options.markTokenState.tokenTag,
          0,
        );
        token.markup = options.rawMarkerMarkup;
        token.map = [startLine, state.line];
        token.children = [];
        return true;
      };
      md.renderer.rules[options.markTokenState.tokenType] = function () {
        return options.transformHtmlFunction(options.containerClass);
      };

      md.block.ruler.before("heading", markKey, markerRuleBlock);
    };
    return pluginReturn;
  };
  getAllPlugins(): PluginSimple[] {
    const markKeys = this._TransformMaps.keys();
    let plugins: PluginSimple[] = [];
    markKeys.map((k) => {
      const foundPlugin = this.getMarkdownPlugin(k);
      if (foundPlugin) plugins.push(foundPlugin);
    });
    return plugins;
  }
}
