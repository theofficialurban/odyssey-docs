<script setup lang="ts">
import { useData } from "vitepress";
import { Collection, Page } from "../../utils";
import { useCollection } from "@lando/vitepress-theme-default-plus";
import { computed } from "vue";
import Card from "./PrimeVue/NewCard.vue";
import { getCollectionSlug } from "../../Constants";
import { getRandomOpenGraphImage } from "../../OpenGraph";

interface Props {
  collection: string;
  href?: string | null;
  ogimage?: string | null;
  useFinder?: boolean;
  preview?: boolean;
}

const {
  collection,
  href: hHref = null,
  preview = false,
  useFinder = false,
  ogimage: ogImg = null,
} = defineProps<Props>();

const { theme } = useData();

const colls = theme.value.collections ?? null;
const foundCollection: Collection = useCollection(collection);
const foundPages = foundCollection.pages ?? [];
const href = computed(() => {
  if (useFinder) return getCollectionSlug(collection, hHref);
  return hHref;
});

const validCollection = computed<boolean>(() =>
  Object.hasOwn(colls, collection),
);

const foundPage = computed<Page | null>(() => {
  const found =
    foundPages.find((p) => {
      if (!href.value) return null;
      return p.url == href.value || p.url.includes(href.value);
    }) ?? null;
  return found;
});

const ogImage = computed<string>(() => {
  if (ogImg !== null) return ogImg;
  if (foundPage.value == null) return getRandomOpenGraphImage();
  if (foundPage.value.ogimage)
    return foundPage.value.ogimage.includes("/og-")
      ? getRandomOpenGraphImage()
      : foundPage.value.ogimage;
  if (foundPage.value.secret == true) return getRandomOpenGraphImage();

  const hrefSplit = foundPage.value.url.split("/"); // `0/ 1 magic / 2 slug.html

  if (hrefSplit.length == 3) {
    const slugSplit = hrefSplit[2].split("."); // slug 0 html 1
    const realSlug = slugSplit[0]; // og-slug.png

    return `/${hrefSplit[1]}/og-${realSlug}.png`;
  }
  return getRandomOpenGraphImage();
});
</script>

<template>
  <Card
    v-if="foundPage !== null"
    :title="foundPage.title"
    :description="foundPage.description"
    :img="foundPage.ogimage ?? ogImage"
    :href="foundPage.url"
    :preview
  />

  <sub v-else class="font-mono text-red-500 text-lg"
    >Unable to Find Page: {{ href }} in Collection {{ collection }}
    {{ validCollection ? "The Collection is Valid" : "Invalid Collection" }}
    useFinder is {{ useFinder }}</sub
  >
</template>
