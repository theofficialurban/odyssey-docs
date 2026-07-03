<script setup lang="ts">
import { computed, HTMLAttributes } from "vue";
import { withAlpha } from "../../utils";

interface Props {
  color?: string;
  alpha?: number;
  floating?: boolean;
  props?: HTMLAttributes;
}
const {
  color = "#f2ff00",
  alpha = 65,
  floating = true,
  props = {},
} = defineProps<Props>();
const alphaColor = computed<string>(() => {
  return withAlpha(color, alpha);
});
</script>

<template>
  <mark v-bind="{ ...props }" :class="[{ floating: floating }, props.class]"
    ><slot></slot
  ></mark>
</template>

<style scoped>
mark {
  &.floating {
    --floating-background: var(--vp-c-bg);
    border-radius: 0;
    padding-bottom: 5px;
    color: var(--vp-c-text-1);
    background-image: linear-gradient(
      360deg,
      rgba(255, 255, 255, 0) 28%,
      var(--floating-background) 28%
    ) !important;
  }
  background: v-bind(alphaColor);
}
</style>
