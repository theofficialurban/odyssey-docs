<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Banner from "./components/Banner.vue";

const dt = useData();

const { Layout } = DefaultTheme;
// const stings: BannerProps = reactive({
//   blur: 1,
//   font: "Trade Winds",
//   img: dt.frontmatter.value.ogimage,
// });
// const bannerFont: BannerFontProps = reactive({
//   color: "white",
//   size: "x-large",
//   text: dt.frontmatter.value.title,
// });

// const settingDefault: SettingsFrontmatter = {
//   font: {
//     color: "white",
//     family: "Caesar Dressing",
//     size: "xx-large",
//     style: "normal",
//     weight: "400",
//     text: dt.frontmatter.value.title ?? "Odyssey DB",
//   },
//   settings: {
//     blur: 1,
//     height: "10rem",
//     width: "100%",
//     img: "https://i.imgur.com/S8LHDQ7.jpeg",
//     radius: 8,
//   },
// };
// const bannerRef = ref<SettingsFrontmatter | null>(null);
</script>

<template>
  <Layout>
    <template #doc-before>
      <Banner
        v-if="$frontmatter.banner"
        ref="bannerRef"
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
