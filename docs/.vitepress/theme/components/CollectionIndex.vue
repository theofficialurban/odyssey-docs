<script setup lang="ts">
import { useCollection } from "@lando/vitepress-theme-default-plus";
import {
  VPLCollectionPage,
  VPLCollectionPageTags,
  VPLCollectionPageTitle,
  VPLCollectionItems,
} from "@lando/vitepress-theme-default-plus";

interface Props {
  title: string;
  lead: string;
  collection: string;
}

const { title, collection, lead } = defineProps<Props>();

const { pages, tags, hasItems, page } = useCollection(collection);
</script>

<template>
  <VPLCollectionPage>
    <VPLCollectionPageTitle>
      <template #title>
        {{ title }}
      </template>
      <template #lead>
        {{ lead }}
      </template>
    </VPLCollectionPageTitle>

    <VPLCollectionPageTags v-model="tags" v-if="tags.length > 0 && hasItems" />
    <VPLCollectionItems v-if="hasItems" :items="pages" :tags="tags" />
  </VPLCollectionPage>
</template>
