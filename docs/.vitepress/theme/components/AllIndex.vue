<script setup lang="ts">
import { useData } from "vitepress";
import { computed, ComputedRef } from "vue";

import {
  VPLCollectionItems,
  VPLCollectionPage,
  VPLCollectionPageSection,
  VPLCollectionPageTags,
  useCollection,
  VPLCollectionPageTitle,
} from "@lando/vitepress-theme-default-plus";
import {
  Collection,
  CollectionDefinition,
  findCollection,
} from "../../utils.js";

const { theme } = useData();
const { hasItems, tags } = useCollection();

type ColObj = [
  cKey: string,
  cDef: CollectionDefinition | null,
  c: Collection,
  hasPosts: ComputedRef<boolean>,
];

const collectionsKeys = Object.keys(theme.value.collections);
const collections: ComputedRef<ColObj[]> = computed(() => {
  return collectionsKeys.map((co) => {
    const foundCol: Collection = useCollection(co);

    return [
      co,
      findCollection(theme.value.collections, co),
      foundCol,
      computed(() => hasItems(foundCol.pages, tags)),
    ];
  });
});
</script>

<template>
  <VPLCollectionPage>
    <VPLCollectionPageTitle>
      <template #title> All Posts </template>
      <template #lead> A listing of all pages on the site! </template>
    </VPLCollectionPageTitle>

    <VPLCollectionPageTags v-model="tags" />

    <VPLCollectionPageSection
      v-for="[cKey, cDef, col, hasPosts] in collections"
    >
      <template #title>
        <Icon
          v-if="cDef !== null && cDef.icon && cDef.iconLink"
          :icon="cDef.icon ?? ''"
          :link="cDef.iconLink"
          :title="cKey.toUpperCase()"
        />
      </template>

      <template #items>
        <VPLCollectionItems :items="col.pages" :tags="tags" />
      </template>
    </VPLCollectionPageSection>
  </VPLCollectionPage>
</template>
