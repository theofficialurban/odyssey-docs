<script setup lang="ts">
const { class: className = "" } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="['grid max-md:grid-flow-row md:grid-cols-3 gap-6', className]">
    <slot></slot>
  </div>
</template>
