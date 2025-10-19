<script setup lang="ts">
interface Props {
  fromCol?: string;
  toCol?: string;
  angle?: string;
  weight?: string;
  size?: string;
}

const {
  fromCol = "rgb(66, 211, 146)",
  toCol = "rgb(100, 126, 255)",
  angle = "138deg",
  weight = "600",
  size = "1rem",
} = defineProps<Props>();
</script>

<template>
  <span class="gradient">
    <slot>Gradient</slot>
  </span>
</template>

<style lang="css" scoped>
span {
  font-weight: v-bind(weight);
  font-size: v-bind(size);
  @apply from-[v-bind(fromCol)] to-[v-bind(toCol)] text-transparent bg-clip-text bg-gradient-to-br;
}
</style>
