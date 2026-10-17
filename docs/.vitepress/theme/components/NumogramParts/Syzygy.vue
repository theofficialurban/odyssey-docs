<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Numogram, { type ColorConfig, type Zone } from "../../../Numogram";

interface Props {
  zoneId: number;
  colConfig?: ColorConfig;
}

const {
  zoneId,
  colConfig = {
    gateCol: "red",
    numColor: "white",
    strokeCol: "white",
    fillCol: "none",
  },
} = defineProps<Props>();

const zone = computed(() => {
  return Numogram.Zones[zoneId];
});

// let hovered = defineModel<{
//   type: "zone" | "current" | "gate";
//   id: string | number;
// } | null>({ default: null });

const emit = defineEmits<{
  (e: "activate", id: string | number, event: PointerEvent): void;
  (e: "deactivate", event: PointerEvent): void;
}>();
const handleHover = (id: string | number, event: PointerEvent) => {
  emit("activate", id, event);
};

const handleLeave = (event: PointerEvent) => {
  emit("deactivate", event);
};

// watch(hovered, (newH, oldH, onCleanup) => {
//   if (newH != null && oldH == null) emit("activate", newH.id);
//   if (newH == null && oldH != null) emit("deactivate");

//   onCleanup(() => {
//     hovered.value = null;
//   });
// });
</script>

<template>
  <g
    v-on:click="(e) => handleHover(zone.id, e)"
    class="cursor-pointer"
    :key="`zone-${zone.id}`"
    :class="`zone-${zone.id}`"
  >
    <slot :zone="zone" :key="zone.id">
      <circle
        cx="2735"
        cy="1836"
        r="250"
        :stroke="colConfig.strokeCol"
        stroke-width="10"
      ></circle>
    </slot>

    <slot name="pointer" :zone="zone" :key="zone.id">
      <path
        d="M2888.17 2036.53L2751 1993.68L2869.79 1894L2888.17 2036.53Z"
        :fill="colConfig.numColor"
      ></path>
    </slot>
    <slot name="number" :zone="zone" :key="zone.id">
      <path
        d="M2621.45 1765V1761.03C2621.45 1755.66 2622.6 1751.05 2624.9 1747.21C2627.21 1743.37 2630.53 1739.91 2634.89 1736.84L2659.33 1719.94C2662.15 1717.98 2664.54 1715.59 2666.5 1712.78C2668.46 1709.96 2669.45 1706.59 2669.45 1702.66C2669.45 1697.63 2667.95 1693.7 2664.97 1690.89C2662.06 1688.07 2657.8 1686.66 2652.17 1686.66C2648.75 1686.66 2645.68 1687.43 2642.95 1688.97C2640.3 1690.5 2638.21 1692.59 2636.68 1695.24C2635.14 1697.89 2634.37 1700.87 2634.37 1704.2C2634.37 1704.8 2634.37 1705.35 2634.37 1705.86C2634.37 1706.38 2634.42 1706.89 2634.5 1707.4H2622.34C2622.34 1706.8 2622.34 1706.38 2622.34 1706.12C2622.34 1705.78 2622.34 1705.44 2622.34 1705.1C2622.34 1699.38 2623.62 1694.34 2626.18 1689.99C2628.83 1685.55 2632.41 1682.1 2636.93 1679.62C2641.54 1677.15 2646.79 1675.91 2652.68 1675.91H2654.21C2660.19 1675.91 2665.26 1677.02 2669.45 1679.24C2673.71 1681.46 2676.95 1684.53 2679.17 1688.46C2681.48 1692.3 2682.63 1696.86 2682.63 1702.15C2682.63 1706.59 2681.86 1710.47 2680.33 1713.8C2678.87 1717.13 2676.87 1720.03 2674.31 1722.5C2671.83 1724.98 2669.02 1727.28 2665.86 1729.42L2643.08 1745.16C2641.8 1746.01 2640.69 1746.99 2639.75 1748.1C2638.81 1749.13 2638.09 1750.15 2637.57 1751.18C2637.15 1752.11 2636.85 1752.97 2636.68 1753.74H2683.01V1765H2621.45Z"
        :fill="colConfig.numColor"
      ></path>
    </slot>
    <slot
      name="gate"
      v-if="$slots.gate && zone !== null"
      :zone="zone"
      :colConfig="colConfig"
    >
    </slot>
  </g>
</template>
