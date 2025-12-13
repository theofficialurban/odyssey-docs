<script setup lang="ts">
import { defineClientComponent, useData } from "vitepress";
import Layout from "@lando/vitepress-theme-default-plus/components/VPLLayout.vue";
import { computed, onMounted, ref, watch, watchEffect } from "vue";

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

onMounted(async () => {
  await import("@royalfig/share-button");
});
</script>

<template>
  <Layout />
  <div v-if="pgShare != false && pgLayout != 'home'">
    <!-- <share-button circle position="left"></share-button> -->
    <share-button circle position="left"></share-button>
  </div>
</template>
