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
import {
  type Collection,
  type CollectionDefinition,
  type Page,
  findCollection,
} from "../../utils";
import Icon from "./Icon.vue";
import { useData } from "vitepress";

interface Props {
  title: string;
  lead: string;
  collection: string[];
}

type DefinitionAndPages = {
  definition: CollectionDefinition | null;
  collection: Collection;
  publicPages: Page[];
};

const { theme } = useData();
const { title, collection, lead } = defineProps<Props>();
const collections = computed(() => {
  const cm = new Map<string, DefinitionAndPages>();
  collection.forEach((c) => {
    const found: Collection = useCollection(c);
    const findCol = findCollection(theme.value.collections, c);
    const publicPages: Page[] = found.pages.filter(
      (pg) => pg.secret === undefined || pg.secret === false
    );
    cm.set(c, { definition: findCol, collection: found, publicPages });
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
    <template
      v-for="[
        name,
        { definition: cDef, collection: col, publicPages },
      ] in collections"
    >
      <VPLCollectionPageSection v-if="col.hasItems(publicPages, col.tags)">
        <template #title>
          <Icon
            v-if="cDef !== null && cDef.icon && cDef.iconLink"
            :icon="cDef.icon ?? ''"
            :link="cDef.iconLink"
            :title="name.toUpperCase()"
          />
        </template>
        <template #items>
          <VPLCollectionPageTags
            v-model="col.tags"
            v-if="col.tags.length > 0 && hasItems(publicPages, col.tags)"
          />
          <VPLCollectionItems
            v-if="col.hasItems(publicPages, col.tags)"
            :items="publicPages"
            :tags="col.tags"
          />
        </template>
      </VPLCollectionPageSection>
    </template>
  </VPLCollectionPage>
</template>
