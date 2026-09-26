<script setup lang="ts">
import { computed, inject, onMounted, reactive } from "vue";
import { type TagLoaderContent } from "../data/tagnotes.data";
import PVTag from "primevue/tag";
import NewCard from "primevue/card";
const tagNotes = inject<TagLoaderContent[]>("tagnotes", []);

interface Props {
  tags: string[];
}

const { tags } = defineProps<Props>();

const foundByTag = computed(() => {
  if (tags.length > 9) return [];

  return tagNotes.filter((tn) => tags.some((ts) => tn.tags.includes(ts)));
});
</script>

<template>
  <details v-if="foundByTag.length > 0" class="details custom-block">
    <summary>
      Post Collection:
      <div class="inline-flex gap-2">
        <PVTag v-for="t in tags" severity="success" :value="`#${t}`" />
      </div>
    </summary>
    <div class="grid grid-cols-2 gap-6">
      <a
        v-for="tagNote in foundByTag"
        target="_blank"
        tabindex="0"
        :href="tagNote.url"
      >
        <NewCard
          :class="['overflow-hidden grid! grid-cols-4! max-h-[300px] ']"
          :pt="{
            body: {
              class: 'col-span-4',
            },
            header: {
              class: 'hidden',
            },
          }"
        >
          <template #title>
            <span class="font-bold text-xl">{{ tagNote.title }}</span>
          </template>
          <template #subtitle>
            <sub class="text-yellow-500 font-light">{{ tagNote.url }}</sub>
          </template>
          <template #content>
            <div
              v-html="tagNote.excerpt"
              class="max-h-[100px] overflow-clip"
            ></div>
          </template>
          <template #footer>
            <div class="grid grid-cols-3 gap-2">
              <small
                v-for="t in tagNote.tags"
                class="text-[8px] text-emerald-300"
                >#{{ t }}</small
              >
            </div>
          </template>
        </NewCard>
      </a>
    </div>
  </details>
  <span v-else-if="tags.length > 9">Cannot Find More than 10 Tags</span>
  <span v-else>No Posts Found</span>
</template>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
