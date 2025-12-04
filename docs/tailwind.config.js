/** @type {import("tailwindcss").Config} */
export default {
  content: ["**/*.md", ".vitepress/theme/*.{js,ts,vue}"],
  theme: {
    extend: {
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)",
      },
    },
  },
};
