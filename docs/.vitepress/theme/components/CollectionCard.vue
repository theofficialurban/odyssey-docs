<script setup lang="ts">
import { useData } from "vitepress";
import { Collection, findCollection, Page } from "../../utils";
import { useCollection } from "@lando/vitepress-theme-default-plus";
import { computed } from "vue";
import Card from "./Card.vue";

interface Props {
  collection: string;
  href?: string | null;
  slug?: string | null;
  ogimage?: string | null;
  preview?: boolean;
}

const {
  collection,
  href = null,
  preview = false,
  slug = null,
  ogimage: ogImg = null,
} = defineProps<Props>();

const { theme } = useData();

const colls = theme.value.collections ?? null;
const foundCollection: Collection = useCollection(collection);
const foundPages = foundCollection.pages ?? [];

const validCollection = computed<boolean>(() =>
  Object.hasOwn(colls, collection),
);
const foundPage = computed<Page | null>(() => {
  if (slug && !href) {
    const fp =
      foundPages.find((p) => {
        return p.url.includes(slug);
      }) ?? null;

    return fp;
  } else if (!slug && href) {
    const fp =
      foundPages.find((p) => {
        return p.url == href;
      }) ?? null;

    return fp;
  }
  return null;
});

const ogImage = computed<string>(() => {
  if (ogImg !== null) return ogImg;
  if (foundPage.value == null) return "https://i.imgur.com/S8LHDQ7.jpeg";
  if (foundPage.value.ogimage) return foundPage.value.ogimage;
  if (foundPage.value.secret == true) return "https://i.imgur.com/S8LHDQ7.jpeg";

  const hrefSplit = foundPage.value.url.split("/"); // `0/ 1 magic / 2 slug.html

  if (hrefSplit.length == 3) {
    const slugSplit = hrefSplit[2].split("."); // slug 0 html 1
    const realSlug = slugSplit[0]; // og-slug.png

    return `/${hrefSplit[1]}/og-${realSlug}.png`;
  }
  return "https://i.imgur.com/S8LHDQ7.jpeg";
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
  <sub v-else-if="slug && href" class="font-mono text-red-500 text-lg"
    >You cannot search by href and slug, use either exact href or slug search
    string</sub
  >
  <sub v-else class="font-mono text-red-500 text-lg"
    >Unable to Find Page: {{ href ?? slug }} ({{
      href === null ? "Using Slug Match" : "Using Exact HREF"
    }}) in Collection {{ collection }}
    {{
      validCollection ? "The Collection is Valid" : "Invalid Collection"
    }}</sub
  >
</template>
