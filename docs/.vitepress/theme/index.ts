import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import OdysseyBanner from "./components/OdysseyBanner.vue";
import Banner from "./components/Banner.vue";

export type BannerFontProps = {
  color?: string;
  weight?: string;
  family?: string;
  style?: string;
  size?: string;
  text?: string;
};

export type BannerProps = {
  img?: string;
  blur?: number;
  radius?: number;
  width?: string;
  height?: string;
};

export default {
  Layout: Layout,
  enhanceApp({ app }) {
    app.component("OdysseyBanner", OdysseyBanner);
    app.component("Banner", Banner);
  },
} satisfies Theme;
