<script setup lang="ts">
import { computed, ref } from "vue";
import {
  type Planets,
  type ZodiacSigns,
  PlanetaryIcons,
  ZodiacIcons,
  type Elements,
  ElementalIcons,
} from "../../Esoteric";

interface Props {
  planet?: Planets | null;
  sign?: ZodiacSigns | null;
  element?: Elements | null;
  width?: string;
  height?: string;
  fill?: string;
}

const {
  planet = null,
  sign = null,
  element = null,
  width = "20",
  height = "20",
  fill = "currentColor",
} = defineProps<Props>();

const foundPlanetIcon = computed<string | null>(() => {
  if (planet == null) return null;
  if (sign != null || element != null) return null;
  const found = PlanetaryIcons[planet] ?? null;
  if (found) {
    let fixWH = found.replaceAll("{{width}}", width);
    fixWH = fixWH.replaceAll("{{height}}", height);
    fixWH = fixWH.replaceAll("{{fill}}", fill);

    return fixWH;
  }
  return null;
});
const foundZodiacIcon = computed<string | null>(() => {
  if (sign == null) return null;
  if (planet != null || element != null) return null;
  const found = ZodiacIcons[sign] ?? null;
  if (found) {
    let fixWH = found.replaceAll("{{width}}", width);
    fixWH = fixWH.replaceAll("{{height}}", height);
    fixWH = fixWH.replaceAll("{{fill}}", fill);

    return fixWH;
  }
  return null;
});
const foundElementIcon = computed<string | null>(() => {
  if (element == null) return null;
  if (sign != null || planet != null) return null;
  const found = ElementalIcons[element] ?? null;
  if (found) {
    let fixWH = found.replaceAll("{{width}}", width);
    fixWH = fixWH.replaceAll("{{height}}", height);
    fixWH = fixWH.replaceAll("{{fill}}", fill);

    return fixWH;
  }
  return null;
});
</script>

<template>
  <div v-if="!foundElementIcon && !foundPlanetIcon && !foundZodiacIcon">
    <span>Error finding Icon</span>
  </div>
  <div v-else-if="foundPlanetIcon !== null">
    <span v-html="foundPlanetIcon"></span>
  </div>
  <div v-else-if="foundZodiacIcon !== null">
    <span v-html="foundZodiacIcon"></span>
  </div>
  <div v-else-if="foundElementIcon !== null">
    <span v-html="foundElementIcon"></span>
  </div>
</template>
