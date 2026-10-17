<script setup lang="ts">
import { computed } from "vue";
import { getMeshTagData, Zone } from "../../../../Numogram";
import Demon from "./Demon.vue";

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

    <div
      class="bg-zinc-900 border border-zinc-800 rounded p-4 space-y-3 mt-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
    >
      <h4
        class="text-sm font-bold text-cyan-500 uppercase tracking-widest border-b border-zinc-800 pb-2 flex items-center justify-between"
      >
        <span>Sarkonian Mesh-Tag</span>
        <span class="text-cyan-700 font-mono text-xs">Bitmask OS Kernel</span>
      </h4>

      <div v-if="meshTag">
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span class="block text-xs text-zinc-500 uppercase"
              >Bitmask Formula</span
            >
            <span class="text-zinc-300 font-mono"
              >{{ meshTag.formula }} = {{ meshTag.val }}</span
            >
          </div>
          <div>
            <span class="block text-xs text-zinc-500 uppercase"
              >Hex Address</span
            >
            <span class="text-cyan-400 font-mono">{{ meshTag.hex }}</span>
          </div>
        </div>

        <div class="pt-2">
          <span class="block text-xs text-zinc-500 uppercase mb-1"
            >Scale-Invariant Binary Register (16-bit)</span
          >
          <div
            class="bg-black text-cyan-500 font-mono text-sm p-3 rounded tracking-widest text-center shadow-inner border border-zinc-800 flex justify-center space-x-1"
          >
            <span
              v-for="(char, idx) in meshTag.bin.split('')"
              :key="idx"
              :class="
                char === '1'
                  ? 'text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]'
                  : 'text-zinc-800'
              "
              >{{ char }}</span
            >
          </div>
        </div>

        <div class="pt-2 border-t border-zinc-800/50 mt-2">
          <span class="block text-xs text-zinc-500 uppercase mb-1"
            >Hardware / OS Capability</span
          >
          <span class="text-sm text-zinc-300">{{ meshTag.role }}</span>
        </div>

        <div class="text-[10px] text-zinc-500 leading-tight mt-2">
          <span class="text-cyan-600 font-bold">O(1) Scale Invariance:</span>
          Homomorphic subsumption allows macro-cloud managers and micro-motes to
          execute this exact bitmask natively via bitwise extraction,
          maintaining token independence.
        </div>
      </div>
    </div>
  </div>
</template>
