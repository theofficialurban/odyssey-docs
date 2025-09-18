<script setup lang="ts">
import {
  useCollection,
  VPLCollectionItems,
  VPLCollectionPage,
  VPLCollectionPageTags,
  VPLCollectionPageTitle,
} from "@lando/vitepress-theme-default-plus";
import { inject } from "vue";
const { posts } = useCollection("bible");
console.log(posts);
</script>

<template>
  <VPLCollectionPage>
    <VPLCollectionPageTitle>
      <template #title> Guides </template>
      <template #lead> Helpful tutorial-like content! </template>
    </VPLCollectionPageTitle>
  </VPLCollectionPage>
</template>
