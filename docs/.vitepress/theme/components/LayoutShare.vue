<script setup lang="ts">
import { useData } from "vitepress";
import Layout from "@lando/vitepress-theme-default-plus/components/VPLLayout.vue";
import CollectionHeader from "@lando/vitepress-theme-default-plus/components/VPLCollectionHeader.vue";
import { computed, ref, watch, watchEffect } from "vue";

const { page } = useData();

const pgLayout = ref(page.value.frontmatter.layout);

const pgShare = ref(page.value.frontmatter.share ?? true);

watch(
  () => page.value.relativePath,
  () => {
    pgLayout.value = page.value.frontmatter.layout;
    pgShare.value = page.value.frontmatter.share;
  }
);
</script>

<template>
  <Layout />
  <div v-if="pgShare != false && pgLayout != 'home'">
    <share-button circle position="left"></share-button>
  </div>
</template>
