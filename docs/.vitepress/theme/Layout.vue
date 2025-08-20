<script setup>
import DefaultTheme from "vitepress/theme";
import OdysseyBanner from "./components/OdysseyBanner.vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-before>
      <sub v-if="$frontmatter.deepDiveURL"
        >Article Link Available:
        <a
          style="color: red; font-weight: bold"
          :href="$frontmatter.deepDiveURL"
          >Click here to visit article</a
        ></sub
      >
      <!-- <div class="pb-3"><OdysseyBanner /></div> -->
      <!-- this is where markdown content will be rendered -->
      <!-- <Content /> -->
    </template>
  </Layout>
</template>
