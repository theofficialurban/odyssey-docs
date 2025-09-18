<script setup lang="ts">
import {
  useCollection,
  VPLCollectionItems,
  VPLCollectionPage,
  VPLCollectionPageTags,
  VPLCollectionPageTitle,
} from "@lando/vitepress-theme-default-plus";
import { inject } from "vue";

const posts: unknown[] | undefined = inject("posts");
console.log(posts);
console.log(useCollection("bible"));
</script>

<template>
  <VPLCollectionPage>
    <VPLCollectionPageTitle>
      <template #title> Guides </template>
      <template #lead> Helpful tutorial-like content! </template>
    </VPLCollectionPageTitle>

    <VPLCollectionItems :items="posts" />
  </VPLCollectionPage>
</template>
