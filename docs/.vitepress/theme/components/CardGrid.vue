<script setup lang="ts">
import type { HTMLAttributes } from "vue";
const { class: className = "" } = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="[
      'grid max-md:grid-flow-row md:grid-cols-3 gap-6 mx-auto py-4',
      className,
    ]"
  >
    <slot></slot>
  </div>
</template>
