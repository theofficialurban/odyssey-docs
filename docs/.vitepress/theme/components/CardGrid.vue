<script setup lang="ts">
const { className = "grid grid-flow-row gap-4" } = defineProps<{
  className?: string;
}>();
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
