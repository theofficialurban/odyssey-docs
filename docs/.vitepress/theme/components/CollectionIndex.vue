<script setup lang="ts">
import {
  useCollection,
  VPLCollectionPage,
  VPLCollectionPageTags,
  VPLCollectionPageTitle,
  VPLCollectionPageSection,
  VPLCollectionItems,
} from "@lando/vitepress-theme-default-plus";
import { computed } from "vue";
import { Collection } from "../../utils";

interface Props {
  title: string;
  lead: string;
  collection: string[];
}

const { title, collection, lead } = defineProps<Props>();
const collections = computed(() => {
  const cm = new Map<string, Collection>();
  collection.forEach((c) => {
    const found: Collection = useCollection(c);
    cm.set(c, found);
  });
  return cm;
});
const { hasItems, tags } = useCollection();
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
    <template v-for="[name, col] in collections">
      <VPLCollectionPageSection v-if="col.hasItems(col.pages, col.tags)">
        <template #title>
          <a :href="`/${name}`">{{ name.toUpperCase() }}</a>
        </template>
        <template #items>
          <VPLCollectionPageTags
            v-model="col.tags"
            v-if="col.tags.length > 0 && hasItems(col.pages, col.tags)"
          />
          <VPLCollectionItems
            v-if="col.hasItems(col.pages, col.tags)"
            :items="col.pages"
            :tags="col.tags"
          />
        </template>
      </VPLCollectionPageSection>
    </template>
  </VPLCollectionPage>
</template>
