<script setup lang="ts">
import { computed } from "vue";
import { type EmbedPlatformBtn, PlatformIcons } from "../../utils";
import Icon from "./Icon.vue";

interface Props {
  buttons: EmbedPlatformBtn[];
  className?: string;
}

const btnClasses = {
  start: `bg-neutral-900 w-full no-underline items-center inline-flex text-center justify-center hover:bg-neutral-800 hover:font-bold focus:bg-neutral-700 focus:font-bold font-medium leading-5 rounded-l-full text-sm px-3 py-2 focus:outline-none`,
  normal: `bg-neutral-900 w-full no-underline inline-flex items-center text-center justify-center hover:bg-neutral-800 hover:font-bold focus:bg-neutral-700 focus:font-bold font-medium leading-5 text-sm px-3 py-2 focus:outline-none`,
  end: `bg-neutral-900 w-full no-underline inline-flex items-center text-center justify-center hover:bg-neutral-800 hover:font-bold focus:bg-neutral-700 focus:font-bold font-medium leading-5 rounded-r-full text-sm px-3 py-2 focus:outline-none`,
  solo: `bg-neutral-900 w-full no-underline inline-flex items-center text-center justify-center hover:bg-neutral-800 hover:font-bold focus:bg-neutral-700 focus:font-bold font-medium leading-5 rounded-r-full rounded-l-full text-sm px-3 py-2 focus:outline-none`,
};

const demo: EmbedPlatformBtn[] = [
  ["Rumble", "https://google.com"],
  ["Odysee", "https://google.com"],
];

const {
  buttons = [
    ["Rumble", "https://google.com"],
    ["Odysee", "https://google.com"],
  ],
  className = "",
} = defineProps<Props>();
const btnsCount = computed(() => buttons.length);

const getClass = (currentIndex: number) => {
  if (btnsCount.value == 1) return btnClasses["solo"];
  if (currentIndex == 0) return btnClasses["start"];
  if (currentIndex == btnsCount.value - 1) return btnClasses["end"];
  return btnClasses["normal"];
};
</script>

<template>
  <div
    :class="[
      `inline-flex no-underline rounded-full shadow-xs mx-auto min-w-full`,
      className,
    ]"
    v-if="btnsCount > 0"
  >
    <a
      v-for="([platform, href], index) in buttons"
      :href="href"
      target="_blank"
      :class="getClass(index)"
    >
      <span class="me-1.5" v-html="PlatformIcons[platform]"></span>
    </a>
  </div>
  <span v-else>No Links in Button Row</span>
</template>
