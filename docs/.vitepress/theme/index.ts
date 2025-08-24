import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import OdysseyBanner from "./components/OdysseyBanner.vue";
import Banner from "./components/Banner.vue";

export type BannerProps = {
  img?: string;
  blur?: number;
  radius?: number;
  width?: string;
  height?: string;
  font?: string;
};

export default {
  Layout: Layout,
  enhanceApp({ app }) {
    app.component("OdysseyBanner", OdysseyBanner);
    app.component("Banner", Banner);
  },
} satisfies Theme;
