<script setup lang="ts">
const { props = {} } = defineProps<{ props?: Record<string, any> }>();
</script>

<template>
  <share-button position="left" v-bind="props"></share-button>
</template>
