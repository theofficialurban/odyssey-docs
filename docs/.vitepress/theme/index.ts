import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import OdysseyBanner from "./components/OdysseyBanner.vue";
export default {
  Layout: Layout,
  enhanceApp({ app }) {
    app.component("OdysseyBanner", OdysseyBanner);
  },
} satisfies Theme;
