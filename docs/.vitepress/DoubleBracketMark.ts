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
export default abstract class DoubleBracketMarkdownTransform {
  // private _TransformMaps: Map<string, DoubleBracketDefaultOptions> = new Map<
  //   string,
  //   DoubleBracketDefaultOptions
  // >();
  private _Regex: RegExp;
  private _RawMarkup: string = "";

  /**
   *
   * @param markTransforms Pair a set of replacement mark options with a key to transform as many `[[???]]` as you'd like based on the options
   */
  constructor(
    private _SearchString: string,
    private _Token: { tokenType: string; tokenTag: string },
    public containerClass: string,
  ) {
    const formattedString = `\[\[` + this._SearchString + `\]\]`;
    this._RawMarkup = `[[${this._SearchString}]]`;
    this._Regex = new RegExp(formattedString, "im");
    console.log(
      this._RawMarkup,
      this._Regex.exec("[[substack]]"),
      this._SearchString,
      this._Token,
      this.containerClass,
    );
  }
  regexCheck(checkString: string): RegExpExecArray | null {
    return this._Regex.exec(checkString);
  }
  abstract _TransformHtml: DoubleBracketTransformFunction;
  get Plugin(): PluginSimple {
    return (md: MarkdownIt) => {
      const options: DoubleBracketDefaultOptions = Object.assign(
        {},
        {
          containerClass: this.containerClass,
          transformHtmlFunction: this._TransformHtml,
          markTokenState: this._Token,
          rawMarkerMarkup: this._RawMarkup,
          markerPattern: this._Regex,
        },
      );
      //const markerRegexp = options.markerPattern ?? this._Regex;
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
        //const testReg = /^\[\[substack\]\]/im;
        match = this.regexCheck(state.src.substring(start, max));
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

      md.block.ruler.before(
        "heading",
        options.markTokenState.tokenType,
        markerRuleBlock,
      );
      console.log(md.renderer.rules);
    };
  }
}
