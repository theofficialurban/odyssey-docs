<script setup lang="ts">
import { computed } from "vue";
import { getMeshTagData, type Zone } from "../../../../Numogram";
import Demon from "./Demon.vue";
import MeshTagDisplay from "./MeshTagDisplay.vue";

interface Props {
  zone: Zone;
}

const { zone } = defineProps<Props>();

const meshTag = computed(() => {
  return getMeshTagData(zone.id);
});
</script>

<template>
  <div v-if="zone">
    <div class="flex max-md:flex-col max-md:gap-2 justify-between w-full">
      <h2 class="text-3xl font-bold text-white">
        {{ zone.name }}
      </h2>
      <h3
        class="text-3xl text-red-500 font-extrabold uppercase tracking-widest"
      >
        {{ zone.planet }}
      </h3>
    </div>

    <div
      class="grid lg:grid-cols-2 max-md:grid-flow-row gap-4 border-y border-zinc-800 py-4"
    >
      <div>
        <span class="block text-xs text-zinc-500 uppercase">Region</span>
        <span class="text-sm text-zinc-200">{{ zone.region }}</span>
      </div>
      <div>
        <Demon :demon="zone.demon" />
      </div>
    </div>

    <div class="text-zinc-400 leading-relaxed">
      {{ zone.lore }}
    </div>

    <MeshTagDisplay :zone />
  </div>
</template>
