<script setup lang="ts">
const { className = "grid max-md:grid-flow-row md:grid-cols-3 gap-6" } =
  defineProps<{
    className?: string;
  }>();
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
