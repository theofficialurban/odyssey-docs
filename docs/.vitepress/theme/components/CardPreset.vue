<script setup lang="ts">
import {
  ComponentPropsOptions,
  computed,
  ExtractDefaultPropTypes,
  ExtractPropTypes,
  ExtractPublicPropTypes,
  PropType,
} from "vue";
import Card from "./Card.vue";

interface CardProps {
  href: string;
  title: string;
  img: string;
  description: string;
}

const presets: Record<string, CardProps> = {
  odyssey: {
    title: "Urban Odyssey | Urban (theofficialurban) | Substack",
    img: "https://substackcdn.com/image/fetch/$s_!CG4e!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Ftheofficialurban.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D-1679742482%26version%3D9",
    description:
      "A deep dive into politics, esoterica, occult, and conspiracy. Guest writers are always welcome, just send me an e-mail. Anything goes, we can't promise any specific subject or area, but we can promise a bit of everything. Click to read Urban Odyssey, a Substack publication with tens of thousands of subscribers.",
    href: "https://theofficialurban.substack.com",
  },
};

function getPreset(name: string): CardProps | null {
  const found = presets[name];
  console.log(found);
  return found.title ? found : null;
}

interface Props {
  preset?: string;
}

const { preset = "odyssey" } = defineProps<Props>();

const selectedPreset = computed<CardProps | null>(() => {
  const s = getPreset(preset);
  return s;
});
</script>

<template>
  <div v-if="selectedPreset != null">
    <Card v-if="preset == 'odyssey'" v-bind="selectedPreset" />
  </div>
  <div v-else>
    <sub class="font-mono text-red-600">Invalid Preset</sub>
  </div>
</template>
