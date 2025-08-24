<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Banner from "./components/Banner.vue";
import { reactive } from "vue";
import { BannerProps } from ".";
const dt = useData();

const { Layout } = DefaultTheme;
const stings: BannerProps = reactive({
  blur: 1,
  font: "Trade Winds",
  img: dt.frontmatter.value.ogimage,
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <Banner v-if="$frontmatter.banner" :settings="stings"></Banner>

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
