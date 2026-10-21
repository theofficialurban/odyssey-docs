<script setup lang="ts">
import Dialog from "primevue/dialog";
import { computed, inject } from "vue";
import { NumogramInjectionSymbol } from "../../../../Numogram";

import ZoneDisplay from "./ZoneDisplay.vue";
import CurrentDisplay from "./CurrentDisplay.vue";
import GateDisplay from "./GateDisplay.vue";

interface Props {
  selected: { type: "current" | "zone" | "gate"; id: string | number } | null;
}
const { selected } = defineProps<Props>();
//const visible = ref<boolean>(false);
const Numogram = inject(NumogramInjectionSymbol) ?? null;

const visible = defineModel<boolean>("visible", { default: false });

const emit = defineEmits<{
  (e: "close", id?: number | string): void;
}>();

const idNum = computed(() => {
  if (selected && (selected.type == "zone" || selected.type == "gate")) {
    if (selected.id == 0 || selected.id == "0") return 0;
    else if (selected.id) return Number(selected.id);
  }
  return null;
});

const curSyz = computed(() => {
  if (
    selected &&
    selected.type === "current" &&
    typeof selected.id === "string" &&
    Numogram !== null
  ) {
    if (selected.id == "5::4" || selected.id == "4::5")
      return Numogram.Currents["5::4"];
    else if (selected.id == "6::3" || selected.id == "3::6")
      return Numogram.Currents["6::3"];
    else if (selected.id == "7::2" || selected.id == "2::7")
      return Numogram.Currents["7::2"];
    else if (selected.id == "8::1" || selected.id == "1::8")
      return Numogram.Currents["8::1"];
    else if (selected.id == "9::0" || selected.id == "0::9")
      return Numogram.Currents["9::0"];
    return null;
  }
  return null;
});
</script>

<template>
  <div v-if="selected !== null && Numogram !== null" class="py-4">
    <Dialog
      v-model:visible="visible"
      draggable
      maximizable
      modal
      dismissableMask
      :position="'topright'"
      v-on:update:visible="
        (vis: boolean) => {
          // Anytime dialog is closed it will clear the hovered.value
          if (!vis) $emit('close', selected?.id);
        }
      "
      :pt="{
        content: {
          props: { class: 'max-w-[90vw] w-[90vw] md:w-[75vw] lg:w-[50vw]' },
        },
      }"
      header="Details"
      class="w-[90vw] md:w-[75vw] lg:w-[50vw]"
    >
      <div class="border-b border-red-900/50 mb-6">
        <h1
          class="text-3xl font-bold text-red-500 mb-2 uppercase tracking-widest"
        >
          Pandemonium System
        </h1>
        <p class="text-zinc-500 text-sm">
          Interactive Decimation Cartography & Lemurian Time-Maze
        </p>
      </div>
      <div
        v-if="selected && idNum != null && selected.type === 'zone'"
        class="animate-fade-in space-y-6"
      >
        <ZoneDisplay :zone="Numogram.Zones[idNum]" />
      </div>
      <div
        v-else-if="selected && curSyz && selected.type === 'current'"
        class="animate-fade-in space-y-6"
      >
        <CurrentDisplay :current="curSyz" />
      </div>
      <div v-else-if="selected && idNum && selected.type === 'gate'">
        <GateDisplay :gate="Numogram.Gates[idNum]" />
      </div>
    </Dialog>
  </div>
</template>
