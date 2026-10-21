<script setup lang="ts">
import { inject } from "vue";
import { NumogramInjectionSymbol, type Gate } from "../../../Numogram";

interface Props {
  gate: Gate;
  class?: string;
}

const Numogram = inject(NumogramInjectionSymbol) ?? null;

const { gate, class: className = "" } = defineProps<Props>();

// const gate = computed<Gate | null>(() => {
//   return Numogram ? Numogram.Gates[gateid] : null;
// });
const gateId = gate.value;
const emit = defineEmits<{
  (e: "activate", gateId: number | string, event: PointerEvent): void;
}>();

const handleClick = (e: PointerEvent) => {
  emit("activate", gate.value, e);
};
</script>

<template>
  <g
    :key="`gate-${gateId}`"
    :class="['cursor-pointer transition-all duration-300', className]"
    v-if="gate && Numogram"
    v-on:click="(e) => handleClick(e)"
  >
    <slot>
      <path
        d="M1877.52 3263V3252.38H1900.69V3190.04H1877.52V3182.23C1880.33 3181.98 1883.45 3181.51 1886.86 3180.82C1890.27 3180.06 1893.86 3179.12 1897.61 3178.01C1901.45 3176.81 1905.21 3175.45 1908.88 3173.91H1913.61V3252.38H1936.53V3263H1877.52Z"
        fill="white"
      ></path>

      <text
        textAnchor="middle"
        dy="5"
        fill="#fff"
        fontSize="14"
        fontWeight="bold"
      >
        {{ gateId }}
      </text>

      <circle
        cx="110"
        cy="110"
        r="110"
        transform="matrix(1 0 0 -1 1796 3329)"
        stroke="white"
        stroke-width="10"
      ></circle>
    </slot>
  </g>
</template>
