import { type Theme } from "vitepress";
import VPLTheme, { useCollection } from "@lando/vitepress-theme-default-plus";

import "./global.css";

import OdysseyBanner from "./components/OdysseyBanner.vue";
import CollectionIndex from "./components/CollectionIndex.vue";
import Banner from "./components/Banner.vue";
import SpotifyPlaylists from "./components/SpotifyPlaylists.vue";
import Card from "./components/Card.vue";
import LinkedArticle from "./components/LinkedArticle.vue";

import MinLink from "./components/MinLink.vue";
import PDF from "./components/PDF.vue";
import AllIndex from "./components/AllIndex.vue";
import Gradient from "./components/Gradient.vue";
import OdysseySubstack from "./components/OdysseySubstack.vue";
import Video from "./components/Video.vue";
import AudioEmbed from "./components/Audio.vue";

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
export type PodcastsSettings = {
  spotify?: boolean;
  apple?: boolean;
  width?: string;
  height?: string;
  classes?: { spotify?: string; apple?: string };
};
export default {
  extends: VPLTheme,

  enhanceApp({ app }) {
    app.component("OdysseyBanner", OdysseyBanner);
    app.component("Substack", OdysseySubstack);
    app.component("Spotify", SpotifyPlaylists);
    app.component("Banner", Banner);
    app.component("Card", Card);
    app.component("Gradient", Gradient);
    app.component("Article", LinkedArticle);
    app.component("CollectionIndex", CollectionIndex);
    app.component("All", AllIndex);
    app.component("MinCard", MinLink);
    app.component("Vid", Video);
    app.component("AudioEmbed", AudioEmbed);
    app.component("PDF", PDF);
  },
} satisfies Theme;
