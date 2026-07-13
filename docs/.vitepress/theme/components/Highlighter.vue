<script setup lang="ts">
import { computed, HTMLAttributes } from "vue";
import { basicTooltipHtml, withAlpha } from "../../utils";
import type { TooltipOptions } from "primevue/tooltip";

interface Props {
  color?: string;
  alpha?: number;
  floating?: boolean;
  tooltip?: TooltipProp | null;
  props?: HTMLAttributes;
}
type TooltipProp = { title: string; content: string; options?: TooltipOptions };
const {
  color = "#f2ff00",
  alpha = 65,
  floating = true,
  tooltip = null,
  props = {},
} = defineProps<Props>();
const alphaColor = computed<string>(() => {
  return withAlpha(color, alpha);
});
</script>

<template>
  <mark
    v-if="tooltip === null"
    v-bind="{ ...props }"
    :class="[{ floating: floating }, props.class]"
    ><slot></slot
  ></mark>
  <mark
    v-else-if="tooltip"
    v-tooltip.top="
      basicTooltipHtml(tooltip.title, tooltip.content, tooltip.options)
    "
    v-bind="{ ...props }"
    :class="[{ floating: floating }, props.class]"
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
