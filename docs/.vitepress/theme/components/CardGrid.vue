<script setup lang="ts">
const { className = "grid grid-flow-row gap-6" } = defineProps<{
  className?: string;
}>();
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
