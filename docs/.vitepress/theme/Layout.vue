<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Banner from "./components/Banner.vue";
import { computed } from "vue";

const dt = useData();

const { Layout } = DefaultTheme;
const defaultFonts = `
  'Inter var experimental', 'Inter var', 'Inter',
    ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
  `;
const monoFonts = `
ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco,
    Consolas, 'Liberation Mono', 'Courier New', monospace
`;
const fonts = computed<{
  headerFont: string;
  bodyFont: string;
  bgColor: string;
}>(() => {
  const fr = {
    headerFont: dt.frontmatter.value.useHeaderFont ?? defaultFonts,
    bodyFont: dt.frontmatter.value.useBodyFont ?? defaultFonts,
    bgColor: dt.frontmatter.value.useBgColor ?? "#242424",
  };
  // console.log(fr);
  return fr;
});
</script>

<template dark="true">
  <Layout class="headerFont">
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
.headerFont {
  .VPDoc {
    background-color: v-bind("fonts.bgColor");
    code,
    pre {
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco,
        Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .content-container {
      font-family: v-bind("fonts.bodyFont");
      h1,
      h2,
      h3,
      h4 {
        font-family: v-bind("fonts.headerFont");
      }
    }
  }
}
</style>
