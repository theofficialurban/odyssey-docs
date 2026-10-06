<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { getCollectionSlug } from "../../Constants.js";
import CardGrid from "./CardGrid.vue";
import CollectionCard from "./CollectionCard.vue";

// ["bible", "/bible/apollo.html"]
type CollectionCardTuple = [
  collection: string,
  href: string,
  preview?: boolean,
];

interface Props {
  cards: CollectionCardTuple[];
  class?: string;
  useFinder?: boolean;
  useInline?: boolean;
  useDetails?: boolean;
}

const {
  cards,
  class: className = "",
  useFinder = false,
  useInline = false,
  useDetails: details = false,
} = defineProps<Props>();
//const cardsRef = reactive(cards)

const finderFound: ComputedRef<CollectionCardTuple[]> = computed(() => {
  if (!useFinder) return cards;
  return cards.map(([cCollection, href, preview]) => {
    const findSlug = getCollectionSlug(cCollection, href);
    if (!findSlug) return [cCollection, href, preview];
    return [cCollection, findSlug, preview];
  });
});
const useDetails = computed(() => {
  return finderFound.value.length > 4 || details;
});
</script>

<template>
  <div
    v-if="!useDetails"
    :class="[
      'grid gap-4 mx-auto py-3',
      useInline ? 'grid-flow-row' : 'max-md:grid-flow-row md:grid-cols-3',
      className,
    ]"
  >
    <CollectionCard
      v-for="[collection, href, preview = null] in finderFound"
      :collection
      :href
      :inline="useInline"
      :preview="preview ?? false"
    />
    <slot name="content" v-if="$slots.content"></slot>
  </div>
  <details v-else class="details custom-block" :class="className">
    <summary><slot name="details">Expand for Additional Links</slot></summary>
    <div
      :class="[
        'grid gap-4 mx-auto py-3',
        useInline ? 'grid-flow-row' : 'max-md:grid-flow-row md:grid-cols-3',
      ]"
    >
      <CollectionCard
        v-for="[collection, href, preview = null] in finderFound"
        :collection
        :href
        :inline="useInline"
        :preview="preview ?? false"
      />
      <slot name="content" v-if="$slots.content"></slot>
    </div>
  </details>
  <!-- <CardGrid v-else-if="useFinder" v-for="[collection, href, preview = null] in cards">
    <CollectionCard :collection :href :preview="preview ?? false" />
  </CardGrid> -->
</template>
