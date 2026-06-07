<script setup lang="ts">
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
}

const { cards, className = "grid grid-flow-row gap-6" } = defineProps<Props>();
</script>

<template>
  <CardGrid v-for="[collection, href, preview = null] in cards">
    <CollectionCard :collection :href :preview="preview ?? false" />
  </CardGrid>
</template>
