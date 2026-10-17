<script setup lang="ts">
import { computed, StyleValue } from "vue";
import Numogram, { type Syzygy, type Current } from "../../../Numogram";

interface Props {
  zoneid: number | string;
  d: string;
  fill: string;
  class?: string;
  style?: StyleValue;
}
const {
  zoneid: zoneId,
  d,
  fill,
  class: className = "",
  style = "",
} = defineProps<Props>();

const idNum = computed(() => {
  if (zoneId) {
    if (zoneId == 0 || zoneId == "0") return 0;
    else if (zoneId) return Number(zoneId);
  }
  return null;
});

const SyzygyString = computed<Syzygy | null>(() => {
  switch (idNum.value) {
    case 9:
      return `9::0`;
    case 8:
      return `8::1`;
    case 7:
      return `7::2`;
    case 6:
      return `6::3`;
    case 5:
      return `5::4`;
    case 4:
      return `5::4`;
    case 3:
      return `6::3`;
    case 2:
      return `7::2`;
    case 1:
      return `8::1`;
    case 0:
      return `9::0`;
    default:
      return null;
  }
});

const zone = computed(() => {
  return idNum.value !== null ? Numogram.Zones[idNum.value] : null;
});

const foundCurrent = computed<Current | null>(() => {
  if (
    idNum.value !== null &&
    zone.value !== null &&
    SyzygyString.value !== null
  )
    return Numogram.Currents[SyzygyString.value];
  else return null;
});

const emit = defineEmits<{
  (e: "activate", currentId: Syzygy | string, event: PointerEvent): void;
  (e: "deactivate", event: PointerEvent): void;
}>();

const handleClick = (e: PointerEvent) => {
  if (SyzygyString.value !== null) emit("activate", SyzygyString.value, e);
};
</script>

<template>
  <path
    v-if="zone && foundCurrent"
    v-on:click="(e) => handleClick(e)"
    :d="d"
    :fill="fill"
    :key="`cur-${SyzygyString}`"
    strokeLinecap="round"
    marker-end="url(#arrowhead)"
    :class="['transition-all duration-300 cursor-pointer', className]"
    :style="style"
    strokeWidth="30"
    stroke="black"
  />
</template>
