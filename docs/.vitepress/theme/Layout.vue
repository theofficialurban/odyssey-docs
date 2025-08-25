<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Banner from "./components/Banner.vue";
import { reactive, watchEffect } from "vue";
import { BannerFontProps, BannerProps } from ".";
const dt = useData();

const { Layout } = DefaultTheme;
const stings: BannerProps = reactive({
  blur: 1,
  font: "Trade Winds",
  img: dt.frontmatter.value.ogimage,
});
const bannerFont: BannerFontProps = reactive({
  color: "deepskyblue",
  size: "x-large",
});
type SettingsFrontmatter =
  | {
      font: Partial<BannerFontProps>;
      settings: Partial<BannerProps>;
    }
  | undefined;

watchEffect(() => {
  const fms: SettingsFrontmatter = dt.frontmatter.value.bannerSettings;
  if (fms !== undefined) {
    const { family, size, style, weight, color, text } = fms.font;
    bannerFont.color = color ?? "white";
    bannerFont.family = family ?? "Caesar Dressing";
    bannerFont.size = size ?? "xx-large";
    bannerFont.style = style ?? "normal";
    bannerFont.weight = weight ?? "400";
    bannerFont.text = text ?? dt.frontmatter.value.title;
    const { img, blur, radius, width, height } = fms.settings;
    stings.blur = blur ?? 1;
    stings.height = height ?? "10rem";
    stings.width = width ?? "100%";
    stings.img = img ?? "https://i.imgur.com/S8LHDQ7.jpeg";
    stings.radius = radius ?? 8;
  }
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <Banner
        v-if="$frontmatter.banner"
        :settings="stings"
        :font="bannerFont"
      ></Banner>

      <sub v-if="$frontmatter.deepDiveURL"
        >Article Link Available:
        <a
          target="_blank"
          rel="noopener noreferrer"
          style="color: red; font-weight: bold"
          :href="$frontmatter.deepDiveURL"
          >Click here to visit article</a
        ></sub
      >
    </template>
  </Layout>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Almendra+SC&family=Amatic+SC:wght@400;700&family=Balthazar&family=Bellefair&family=Caesar+Dressing&family=Federant&family=Frank+Ruhl+Libre:wght@300..900&family=Girassol&family=Heebo:wght@100..900&family=IM+Fell+French+Canon:ital@0;1&family=Luxurious+Roman&family=Macondo&family=Noto+Serif+Hebrew:wght@100..900&family=Trade+Winds&family=UnifrakturMaguntia&display=swap");
</style>
