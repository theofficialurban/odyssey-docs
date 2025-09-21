<script setup lang="ts">
import { useData } from "vitepress";
import { computed, ComputedRef } from "vue";
import CollectionIndex from "./CollectionIndex.vue";
const { theme } = useData();

const collections: ComputedRef<string[]> = computed(() =>
  Object.keys(theme.value.collections)
);
</script>

<template>
  <CollectionIndex title="All Posts" lead="" :collection="collections" />
</template>
