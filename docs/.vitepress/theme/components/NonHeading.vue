<script setup lang="ts">
import { computed, StyleValue } from "vue";

interface Props {
  className?: string;
  style?: StyleValue;
  preset?: number;
}

const LevelPresets: Record<number, { className: string }> = {
  0: { className: "font-extrabold text-2xl" }, // Default
  1: { className: "font-black text-4xl" },
  2: { className: "font-extrabold text-3xl" },
  3: { className: "font-bold text-xl" },
  4: { className: "font-semibold text-[18px]" },
};
const { className = null, style = null, preset = 0 } = defineProps<Props>();
const usePreset = computed<{ className: string }>(() => {
  if (!className) return LevelPresets[preset];
  return { className: className ?? "" };
});
</script>

<template>
  <span :class="usePreset.className" :style><slot></slot></span>
</template>
