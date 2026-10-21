<script setup lang="ts">
import { type Gate } from "../../../../Numogram";
import ZoneDisplay from "./ZoneDisplay.vue";
interface Props {
  gate: Gate;
  class?: string;
}

const { gate, class: className = "" } = defineProps<Props>();
</script>

<template>
  <div :class="['animate-fade-in space-y-6', className]" v-if="gate">
    <div>
      <h2 class="text-4xl font-bold text-white mb-1">Gate {{ gate.value }}</h2>
      <h3 class="text-xl text-red-500 uppercase tracking-widest">
        Triangular Cumulation
      </h3>
    </div>

    <div class="grid grid-cols-2 gap-4 border-y border-zinc-800 py-4">
      <div>
        <span class="block text-xs text-zinc-500 uppercase">Source Zone</span>
        <span class="text-xl font-bold text-zinc-200">{{ gate.zone.id }}</span>
      </div>
      <div>
        <span class="block text-xs text-zinc-500 uppercase"
          >Digital Reduction</span
        >
        <span class="text-xl font-bold text-red-500">{{ gate.reduces }}</span>
      </div>
    </div>

    <div class="text-zinc-400 leading-relaxed">
      {{ gate.lore }}
    </div>
    <div>
      <ZoneDisplay :zone="gate.zone" />
    </div>
    <div
      class="bg-zinc-900 p-4 border-l-4 border-red-500 text-sm text-zinc-500"
    >
      <strong class="text-zinc-300 block mb-1"
        >Digital Cumulation Mechanism:</strong
      >
      The process of adding a number to all the natural numbers that precede it.
      Every Zone generates a corresponding Gate through its cumulated value,
      spinning the web of esoteric fibres and time-holes.
    </div>
  </div>
</template>
