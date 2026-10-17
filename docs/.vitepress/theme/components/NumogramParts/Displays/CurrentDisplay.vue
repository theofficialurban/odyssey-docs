<script setup lang="ts">
import { Current } from "../../../../Numogram";
import Demon from "./Demon.vue";

interface Props {
  current: Current;
  class?: string;
}

const { current: curSyz, class: className = "" } = defineProps<Props>();
</script>

<template>
  <div :class="[className]">
    <div>
      <h2 class="text-4xl font-bold text-white mb-1">
        Current {{ curSyz.diff }}
      </h2>
      <h3 class="text-xl text-red-500 uppercase tracking-widest">
        Primary Arithmetical Flow
      </h3>
    </div>

    <div class="grid grid-cols-2 gap-4 border-y border-zinc-800 py-4">
      <div>
        <span class="block text-xs text-zinc-500 uppercase">Origin Syzygy</span>
        <span class="text-xl font-bold text-zinc-200">{{ curSyz.syzygy }}</span>
      </div>
      <div>
        <Demon :demon="curSyz.demon" />
      </div>
    </div>

    <div class="text-zinc-400 leading-relaxed">
      {{ curSyz.lore }}
    </div>

    <div
      class="bg-zinc-900 p-4 border-l-4 border-red-500 text-sm text-zinc-500"
    >
      <strong class="text-zinc-300 block mb-1">Current Derivation:</strong>
      The arithmetical difference between the digits of each syzygy defines a
      current, which connects to a tractor zone. Currents constitute the primary
      forces and physical flows of the Numogram.
    </div>
  </div>
</template>
