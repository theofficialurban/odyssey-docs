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
  className?: string;
  useFinder?: boolean;
  useDetails?: boolean;
}

const {
  cards,
  className = "grid grid-flow-row gap-6",
  useFinder = false,
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
  <CardGrid v-if="!useDetails">
    <CollectionCard
      v-for="[collection, href, preview = null] in finderFound"
      :collection
      :href
      :preview="preview ?? false"
    />
    <slot></slot>
  </CardGrid>
  <details v-else class="details custom-block">
    <summary>Expand for Additional Links</summary>
    <CardGrid>
      <CollectionCard
        v-for="[collection, href, preview = null] in finderFound"
        :collection
        :href
        :preview="preview ?? false"
      />
      <slot></slot>
    </CardGrid>
  </details>
  <!-- <CardGrid v-else-if="useFinder" v-for="[collection, href, preview = null] in cards">
    <CollectionCard :collection :href :preview="preview ?? false" />
  </CardGrid> -->
</template>
