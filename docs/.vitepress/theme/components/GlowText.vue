<script lang="ts" setup>
interface Props {
  color?: string;
  baseColor?: string;
  class?: string;
}

const {
  color = "green",
  baseColor = "#ffffcc",
  class: className = "",
} = defineProps<Props>();
</script>

<template>
  <span :class="['glowText', className]"><slot>Glowing Text</slot></span>
</template>

<style scoped>
.glowText {
  --glow-color: v-bind(color);
  --base-color: v-bind(baseColor);

  color: var(--base-color);
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px var(--glow-color),
    0 0 30px var(--glow-color),
    0 0 40px var(--glow-color);
}
</style>
