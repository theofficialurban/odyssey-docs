<script setup lang="ts">
import { computed, type StyleValue, inject } from "vue";
import {
  type Syzygy,
  type Current,
  type Zone,
  NumogramInjectionSymbol,
} from "../../../Numogram";

interface Props {
  current: Current;
  syzygy: Syzygy;
  d: string;
  fill: string;
  class?: string;
  style?: StyleValue;
}

const Numogram = inject(NumogramInjectionSymbol) ?? null;
const {
  current,
  syzygy,
  d,
  fill,
  class: className = "",
  style = "",
} = defineProps<Props>();

// const idNum = computed(() => {
//   if (zoneId) {
//     if (zoneId == 0 || zoneId == "0") return 0;
//     else if (zoneId) return Number(zoneId);
//   }
//   return null;
// });

// const SyzygyString = computed<Syzygy | null>(() => {
//   switch (idNum.value) {
//     case 9:
//       return `9::0`;
//     case 8:
//       return `8::1`;
//     case 7:
//       return `7::2`;
//     case 6:
//       return `6::3`;
//     case 5:
//       return `5::4`;
//     case 4:
//       return `5::4`;
//     case 3:
//       return `6::3`;
//     case 2:
//       return `7::2`;
//     case 1:
//       return `8::1`;
//     case 0:
//       return `9::0`;
//     default:
//       return null;
//   }
// });

const zones = computed<[z1: Zone, z2: Zone] | null>(() => {
  if (!Numogram) return null;
  const splitSyzygy = syzygy.split("::");
  if (splitSyzygy.length == 2) {
    const z1 = Number(splitSyzygy[0]);
    const z2 = Number(splitSyzygy[1]);
    return [Numogram.Zones[z1], Numogram.Zones[z2]];
  }
  return null;
});

// const foundCurrent = computed<Current | null>(() => {
//   if (
//     idNum.value !== null &&
//     zone.value !== null &&
//     SyzygyString.value !== null &&
//     Numogram
//   )
//     return Numogram.Currents[SyzygyString.value];
//   else return null;
// });

const emit = defineEmits<{
  (e: "activate", currentId: Syzygy | string, event: PointerEvent): void;
}>();

const handleClick = (e: PointerEvent) => {
  if (syzygy) emit("activate", syzygy, e);
};
</script>

<template>
  <path
    v-if="current"
    v-on:click="(e) => handleClick(e)"
    :d="d"
    :fill="fill"
    :key="`cur-${syzygy}`"
    strokeLinecap="round"
    marker-end="url(#arrowhead)"
    :class="['transition-all duration-300 cursor-pointer', className]"
    :style="style"
    strokeWidth="30"
    stroke="black"
  />
</template>
