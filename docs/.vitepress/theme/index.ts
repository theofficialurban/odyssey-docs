import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import OdysseyBanner from "./components/OdysseyBanner.vue";
import Banner from "./components/Banner.vue";
export type SettingsFrontmatter =
  | {
      font: Partial<BannerFontProps>;
      settings: Partial<BannerProps>;
    }
  | undefined;
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
export const fontDefault: BannerFontProps = {
  color: "white",
  family: "Caesar Dressing",
  size: "xx-large",
  style: "normal",
  weight: "400",
};
export const setDefault = {
  blur: 1,
  height: "10rem",
  width: "100%",
  img: "https://i.imgur.com/S8LHDQ7.jpeg",
  radius: 8,
};
export const settingDefault: SettingsFrontmatter = {
  font: fontDefault,
  settings: setDefault,
};
export default {
  Layout: Layout,
  enhanceApp({ app }) {
    app.component("OdysseyBanner", OdysseyBanner);
    app.component("Banner", Banner);
  },
} satisfies Theme;
