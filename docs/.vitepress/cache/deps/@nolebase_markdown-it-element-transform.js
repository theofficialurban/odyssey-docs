import "./chunk-PZ5AY32C.js";

// node_modules/.pnpm/@nolebase+markdown-it-eleme_c1db57d91c7afc699aa96aa0833e8933/node_modules/@nolebase/markdown-it-element-transform/dist/index.mjs
var ElementTransform = (md, options) => {
  if (!options || !options.transform)
    throw new Error("The `transform` option is required");
  md.core.ruler.push(
    "token_transform",
    (state) => {
      const transformFunc = options.transform === void 0 ? function() {
      } : options.transform;
      state.tokens.forEach((token) => {
        if (token.children && token.children.length) {
          token.children.forEach((token2) => {
            transformFunc(token2, state, state.env);
          });
        }
        transformFunc(token, state, state.env);
      });
      return false;
    }
  );
};
export {
  ElementTransform
};
//# sourceMappingURL=@nolebase_markdown-it-element-transform.js.map
