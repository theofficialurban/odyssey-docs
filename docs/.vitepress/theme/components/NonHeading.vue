<script setup lang="ts">
import { computed, StyleValue } from "vue";

interface Props {
  class?: string;
  style?: StyleValue;
  preset?: number;
  href?: string | null;
}

const LevelPresets: Record<number, { className: string }> = {
  0: { className: "font-extrabold text-2xl" }, // Default
  1: { className: "font-black text-4xl" },
  2: { className: "font-extrabold text-3xl" },
  3: { className: "font-bold text-xl" },
  4: { className: "font-semibold text-[18px]" },
};
const {
  class: className = null,
  style = null,
  preset = 0,
  href = null,
} = defineProps<Props>();
const usePreset = computed<{ className: string }>(() => {
  if (!className) return LevelPresets[preset];
  return { className: className ?? "" };
});
</script>

<template>
  <span v-if="href === null" :class="usePreset.className" :style
    ><slot></slot
  ></span>
  <a
    v-else-if="href !== null"
    target="_blank"
    :href="href"
    :class="usePreset.className"
    :style
    ><slot>Click Here</slot></a
  >
</template>
